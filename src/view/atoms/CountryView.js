import { Avatar, Box, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Flags from "../../nonview/core/Flags";

const MIN_WIDTH_FOR_LABELS = 750;

const STYLE_IMAGE = {
  width: "3vh",
  height: "3vh",
  padding: 1,
  margin: 2,
};

export default function CountryView({ country, isWinner }) {
  if (!country) {
    return null;
  }
  const imageSrc = Flags.getImageSrc(country);
  const showLabels = window.innerWidth > MIN_WIDTH_FOR_LABELS;
  const WinnerIcon = isWinner ? CheckBoxIcon : CancelIcon;
  const opacity = isWinner ? 1 : 0.2;
  const color = isWinner ? "darkgreen" : "red";
  const width = showLabels ? 180 : 80;
  return (
    <Box style={{ opacity, width }}>
      <Stack direction="row" gap={2}>
        <WinnerIcon style={{ color }} />
        <Avatar src={imageSrc} style={STYLE_IMAGE} />
        {showLabels ? <Typography variant="body1">{country}</Typography> : null}
      </Stack>
    </Box>
  );
}
