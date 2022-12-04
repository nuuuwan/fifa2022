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
    if (f > 0.1) {
      return Format.percent(f);
    }
    return "1 in " + Format.roundLog(1 / f).toLocaleString();
  }
}
