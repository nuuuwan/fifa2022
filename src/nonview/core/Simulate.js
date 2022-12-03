import R16 from "../constants/R16";
import ODDS from "./ODDS";

const P_NOISE = 0.2;

export default class Simulate {
  static playOffSingle([country1, country2]) {
    const p1 = ODDS[country1];
    const p2 = ODDS[country2];

    const p1win = (p1 + 0.5 * P_NOISE) / (p1 + p2 + P_NOISE);
    return Math.random() < p1win ? country1 : country2;
  }

  static playOff(pairList) {
    return pairList
      .map(Simulate.playOffSingle)
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
    const r8 = Simulate.playOff(r16);
    const r4 = Simulate.playOff(r8);
    const r2 = Simulate.playOff(r4);
    const r1 = Simulate.playOff(r2);

    return {
      r16,
      r8,
      r4,
      r2,
      r1,
    };
  }
}
