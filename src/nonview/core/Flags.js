export default class Flags {
  static getImageSrc(country) {
    if (!country) {
      return "";
    }
    return (
      process.env.PUBLIC_URL + "/flags/" + country.replaceAll(" ", "_") + ".png"
    );
  }
}
