import { Avatar, Box, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Flags from "../../nonview/core/Flags";

const MIN_WIDTH_FOR_LABELS = 750;

const STYLE_IMAGE = {
  width: 16,
  height: 16,
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
  const width = showLabels ? 120 : 50;
  const iconWidth = 16;
  const iconHeight = iconWidth;
  return (
    <Box style={{ opacity, width }}>
      <Stack direction="row" gap={1}>
        <WinnerIcon
          style={{ color, opacity, width: iconWidth, height: iconHeight }}
        />
        <Avatar src={imageSrc} style={STYLE_IMAGE} />
        {showLabels ? (
          <Typography variant="caption">{country}</Typography>
        ) : null}
      </Stack>
    </Box>
  );
}
