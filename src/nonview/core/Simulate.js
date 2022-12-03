import R16 from "../constants/R16";

export default class Simulate {
  static playOffSingle([t1, t2]) {
    return Math.random() > 0.5 ? t1 : t2;
  }

  static playOff(pairList) {
    return pairList.map(Simulate.playOffSingle).reduce(function (pairList2, t) {
      if (
        pairList2.length === 0 ||
        pairList2[pairList2.length - 1].length === 2
      ) {
        pairList2.push([t]);
      } else {
        pairList2[pairList2.length - 1].push(t);
      }
      return pairList2;
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
