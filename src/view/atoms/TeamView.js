import Flags from "../../nonview/core/Flags";

const STYLE_IMAGE = {
  width: "6.25vh",
};

export default function TeamView({ t }) {
  const imageSrc = Flags.getImageSrc(t);
  return <img alt={t} src={imageSrc} style={STYLE_IMAGE} />;
}
