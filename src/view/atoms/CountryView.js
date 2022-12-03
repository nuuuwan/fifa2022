import Flags from "../../nonview/core/Flags";

const STYLE_IMAGE = {
  width: "6.25vh",
};

export default function CountryView({ country }) {
  const imageSrc = Flags.getImageSrc(country);
  return <img alt={country} src={imageSrc} style={STYLE_IMAGE} />;
}
