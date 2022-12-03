import { Avatar, Box } from "@mui/material";

import Flags from "../../nonview/core/Flags";

const STYLE_IMAGE = {
  width: "3vh",
  height: "3vh",
  padding: 1,
};

export default function CountryView({ country }) {
  if (!country) {
    return null;
  }
  const imageSrc = Flags.getImageSrc(country);
  return (
    <Box>
      <Avatar src={imageSrc} style={STYLE_IMAGE} />
    </Box>
  );
}
