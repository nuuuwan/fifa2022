import { Avatar, Box, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Flags from "../../nonview/core/Flags";

const MIN_WIDTH_FOR_LABELS = 750;

const STYLE_IMAGE = {
  width: "3vh",
  height: "3vh",
  padding: 0,
  margin: 0,
};

export default function CountryView({ country, isWinner }) {
  if (!country) {
    return null;
  }
  const imageSrc = Flags.getImageSrc(country);
  const showLabels = window.innerWidth > MIN_WIDTH_FOR_LABELS;
  const WinnerIcon = isWinner ? CheckBoxIcon : CancelIcon;
  const opacity = isWinner ? 1 : 0.25;
  const color = isWinner ? "darkgreen" : "ghost";
  const width = showLabels ? 150 : 60;
  return (
    <Box style={{ opacity, width }}>
      <Stack direction="row" gap={2}>
        <WinnerIcon style={{ color , opacity}} />
        <Avatar src={imageSrc} style={STYLE_IMAGE} />
        {showLabels ? (
          <Typography variant="caption">{country}</Typography>
        ) : null}
      </Stack>
    </Box>
  );
}
