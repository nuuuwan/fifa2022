import GAMES from "../constants/GAMES";
import ODDS from "../constants/ODDS";
import R16 from "../constants/R16";

const P_NOISE = 0.05;
const F_ODDS = 0.8;

export default class Simulate {
  static getP(stageType, iGame, country1, country2) {
    const actualWinner = GAMES[stageType] ? GAMES[stageType][iGame] : null;
    if (country1 === actualWinner) {
      return 1;
    }
    if (country2 === actualWinner) {
      return 0;
    }

    const p1 = Math.pow(ODDS[country1], F_ODDS);
    const p2 = Math.pow(ODDS[country2], F_ODDS);
    return (p1 + 0.5 * P_NOISE) / (p1 + p2 + P_NOISE);
  }

  static playOffSingle(stageType, iGame, [country1, country2], mode) {
    const p1win = Simulate.getP(stageType, iGame, country1, country2);
    if (p1win === 0 || p1win === 1) {
      return p1win === 1 ? country1 : country2;
    }
    switch (mode) {
      case "best":
        return p1win > 0.5 ? country1 : country2;
      case "worst":
        return p1win < 0.5 ? country1 : country2;
      default:
        return Math.random() < p1win ? country1 : country2;
    }
  }

  static playOff(stageType, pairList, mode) {
    return pairList
      .map(function (pair, iGame) {
        return Simulate.playOffSingle(stageType, iGame, pair, mode);
      })
      .reduce(function (pairLiscountry2, country) {
        if (
          pairLiscountry2.length === 0 ||
          pairLiscountry2[pairLiscountry2.length - 1].length === 2
        ) {
          pairLiscountry2.push([country]);
        } else {
          pairLiscountry2[pairLiscountry2.length - 1].push(country);
        }
        return pairLiscountry2;
      }, []);
  }

  static random(mode) {
    const r16 = R16;
    const r8 = Simulate.playOff("r16", r16, mode);
    const r4 = Simulate.playOff("r8", r8, mode);
    const r2 = Simulate.playOff("r4", r4, mode);
    const r1 = Simulate.playOff("r2", r2, mode);

    return {
      r16,
      r8,
      r4,
      r2,
      r1,
    };
  }

  static getStageProbability(stageType, gameList, gameList2) {
    const nGames = gameList.length;
    let p = 1;
    for (let iGame = 0; iGame < nGames; iGame++) {
      const [country1, country2] = gameList[iGame];
      const iGame2A = parseInt(iGame / 2);
      const iGame2B = iGame % 2;
      const winner = gameList2[iGame2A][iGame2B];
      const p1 = Simulate.getP(stageType, iGame, country1, country2);
      let pOutcome = winner === country1 ? p1 : 1 - p1;
      p *= pOutcome;
    }
    return p;
  }

  static getCupProbability(simulationResults) {
    const nStages = Object.keys(simulationResults).length;
    let pCup = 1;
    for (let iStage = 0; iStage < nStages - 1; iStage++) {
      const stageType = Object.keys(simulationResults)[iStage];
      const gameList = Object.values(simulationResults)[iStage];
      const gameList2 = Object.values(simulationResults)[iStage + 1];
      const pStage = Simulate.getStageProbability(
        stageType,
        gameList,
        gameList2
      );
      pCup *= pStage;
    }
    return pCup;
  }
}
