export default class Format {
  static percent(f) {
    return Number(f).toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 0,
    });
  }
  static roundLog(i) {
    const mask = Math.pow(10, parseInt(Math.log10(i)) - 1);
    return parseInt(i / mask + 0.5) * mask;
  }

  static fraction(f) {
    const MAX_DEN = 10;
    const MAX_ABS_ERR = 0.1;
    if (f > 0.1) {
      for (let den = 2; den < MAX_DEN; den++) {
        const num = parseInt(f * den + 0.5);
        const f2 = num / den;
        const err = Math.abs(f2 - f) / f;
        if (err < MAX_ABS_ERR && num !== den) {
          return num + "/" + den;
        }
      }
      return Format.percent(f);
    }
    return "1/" + Format.roundLog(1 / f).toLocaleString();
  }
}
