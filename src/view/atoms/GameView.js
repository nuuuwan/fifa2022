import { Typography, Box, Grid } from "@mui/material";

import DAYS from "../../nonview/constants/DAYS";
import GAMES from "../../nonview/constants/GAMES";
import Format from "../../nonview/core/Format";
import Simulate from "../../nonview/core/Simulate";

import CountryView from "./CountryView";

export default function GameView({
  stageType,
  iGame,
  country1,
  country2,
  winner,
}) {
  const date = DAYS[stageType][iGame];
  const actualWinner = GAMES[stageType] ? GAMES[stageType][iGame] : null;
  const p1 = Simulate.getP(stageType, iGame, country1, country2);
  const pWinner = winner === country1 ? p1 : 1 - p1;

  let background = "white";
  if (pWinner < 0.5) {
    const h = pWinner > 0.5 ? 210 : 0;
    const s = 100;
    const l = 80 - Math.abs(pWinner - 0.5) * 2 * 60;
    const a = 0.1;
    background = `hsla(${h},${s}%,${l}%,${a})`;
  }

  let opacity = 1;
  if (actualWinner) {
    background = `#eee`;
  }
  const style = {
    border: `1px gray solid`,
    borderRadius: 12,
    padding: 3,
    margin: 2,
    opacity,
    background,
  };
  return (
    <Box style={style}>
      <Grid container justify="flex-end" gap={0.5}>
        <Typography variant="caption" sx={{ color: "gray" }}>
          {date}
        </Typography>
        <Typography variant="caption">{Format.percent(pWinner)}</Typography>
      </Grid>

      <CountryView country={country1} isWinner={winner === country1} />
      <CountryView country={country2} isWinner={winner === country2} />
    </Box>
  );
}
