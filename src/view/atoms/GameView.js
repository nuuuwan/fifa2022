import { Typography } from "@mui/material";

import DAYS from "../../nonview/constants/DAYS";
import GAMES from "../../nonview/constants/GAMES";

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
  let opacity = 1;
  if (actualWinner) {
    opacity = 0.1;
  }
  const style = {
    border: "1px gray solid",
    borderRadius: 12,
    padding: 2,
    margin: 2,
    opacity,
  };
  return (
    <div style={style}>
      <Typography variant="caption">{date}</Typography>
      <CountryView country={country1} isWinner={winner === country1} />
      <CountryView country={country2} isWinner={winner === country2} />
    </div>
  );
}
