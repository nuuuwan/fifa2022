import { Avatar, Box, Stack, Typography } from "@mui/material";

import Flags from "../../nonview/core/Flags";

const MIN_WIDTH_FOR_LABELS = 750;

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
  const showLabels = window.innerWidth > MIN_WIDTH_FOR_LABELS;
  return (
    <Box>
      <Stack direction="row">
        <Avatar src={imageSrc} style={STYLE_IMAGE} />
        {showLabels ? (
          <Typography variant="body1">{country}</Typography>
        ): null}        
      </Stack>
    </Box>
  );
}
