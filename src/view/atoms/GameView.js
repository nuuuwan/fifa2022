import { Typography } from "@mui/material";

import DAYS from "../../nonview/constants/DAYS";
import GAMES from "../../nonview/constants/GAMES";
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
    padding: 2,
    margin: 2,
    opacity,
    background,
  };
  return (
    <div style={style}>
      <Typography variant="caption">{date}</Typography>
      <CountryView country={country1} isWinner={winner === country1} />
      <CountryView country={country2} isWinner={winner === country2} />
    </div>
  );
}
