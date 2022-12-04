import GAMES from "../constants/GAMES";
import ODDS from "../constants/ODDS";
import R16 from "../constants/R16";

const P_NOISE = 0.05;

export default class Simulate {
  static getP(stageType, iGame, country1, country2) {
    const actualWinner = GAMES[stageType] ? GAMES[stageType][iGame] : null;
    if (country1 === actualWinner) {
      return 1;
    }
    if (country2 === actualWinner) {
      return 0;
    }

    const p1 = ODDS[country1];
    const p2 = ODDS[country2];
    return (p1 + 0.5 * P_NOISE) / (p1 + p2 + P_NOISE);
  }

  static playOffSingle(stageType, iGame, [country1, country2]) {
    const p1win = Simulate.getP(stageType, iGame, country1, country2);
    return Math.random() < p1win ? country1 : country2;
  }

  static playOff(stageType, pairList) {
    return pairList
      .map(function (pair, iGame) {
        return Simulate.playOffSingle(stageType, iGame, pair);
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

  static random() {
    const r16 = R16;
    const r8 = Simulate.playOff("r16", r16);
    const r4 = Simulate.playOff("r8", r8);
    const r2 = Simulate.playOff("r4", r4);
    const r1 = Simulate.playOff("r2", r2);

    return {
      r16,
      r8,
      r4,
      r2,
      r1,
    };
  }
}
