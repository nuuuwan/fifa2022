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
  if (pWinner > 0.5) {
    background = "white";
  } else {
    const h = (30 * pWinner) / 0.5;
    background = `hsla(${h},100%,50%,0.4)`;
  }

  let opacity = 1;
  if (actualWinner) {
    opacity = 0.1;
  }
  const style = {
    border: `1px gray solid`,
    borderRadius: 12,
    padding: 2.5,
    margin: 1,
    opacity,
    background,
  };
  return (
    <Box style={style}>
      <Grid container justify="flex-end" gap={2}>
        <Typography
          variant="caption"
          component="div"
          sx={{ flexGrow: 0.5, fontSize: "25%", color: "gray" }}
        >
          {date}
        </Typography>

        <Typography variant="caption" sx={{ fontSize: "40%", color: "gray" }}>
          {Format.fraction(pWinner)}
        </Typography>
      </Grid>

      <CountryView country={country1} isWinner={winner === country1} />
      <CountryView country={country2} isWinner={winner === country2} />
    </Box>
  );
}
