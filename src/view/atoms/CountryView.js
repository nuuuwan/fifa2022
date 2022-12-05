import { Avatar, Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Flags from "../../nonview/core/Flags";

const MIN_WIDTH_FOR_LABELS = 750;
const ICON_DIM = 20;
const STYLE_IMAGE = {
  width: ICON_DIM,
  height: ICON_DIM,
  padding: 0,
  margin: 1,
};

export default function CountryView({
  country,
  isWinner,
  isActualWinner,
  showFull,
}) {
  if (!country) {
    return null;
  }
  const imageSrc = Flags.getImageSrc(country);
  const showLabels = window.innerWidth > MIN_WIDTH_FOR_LABELS || showFull;
  const opacity = isWinner ? 1 : 0.2;
  const color = isActualWinner ? "darkgreen" : isWinner ? "orange" : "gray";
  const width = showLabels ? 120 : 50;

  return (
    <Box style={{ opacity, width }}>
      <Stack direction="row" gap={1}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Avatar src={imageSrc} style={STYLE_IMAGE} />
          {showLabels ? (
            <Typography variant="caption">{country}</Typography>
          ) : null}
          {isWinner ? (
            <CheckCircleIcon
              style={{
                color,
                opacity,
                width: ICON_DIM / 2,
                height: ICON_DIM / 2,
              }}
            />
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}
