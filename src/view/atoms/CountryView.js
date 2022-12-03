import { Avatar, Box, Stack, Typography } from "@mui/material";

import Flags from "../../nonview/core/Flags";

const STYLE = {
  width: 120,
}

const STYLE_IMAGE = {
  width: "3vh",
  height: "3vh",
  padding: 1,
  margin: 2,
};

export default function CountryView({ country }) {
  if (!country) {
    return null;
  }
  const imageSrc = Flags.getImageSrc(country);
  return (
    <Box style={STYLE}>
      <Stack direction="row">
        <Avatar src={imageSrc} style={STYLE_IMAGE} />
        <Typography variant="body1">{country}</Typography>
      </Stack>
    </Box>
  );
}
