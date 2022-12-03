import { Typography } from "@mui/material";

import DAYS from "../../nonview/constants/DAYS";

import CountryView from "./CountryView";

const STYLE_GAME = {
  border: "1px gray solid",
  borderRadius: 12,
  padding: 3,
  margin: 2,
};

export default function GameView({
  stageType,
  iGame,
  country1,
  country2,
  winner,
}) {
  const date = DAYS[stageType][iGame];
  return (
    <div style={STYLE_GAME}>
      <Typography variant="caption">{date}</Typography>
      <CountryView country={country1} isWinner={winner === country1} />
      <CountryView country={country2} isWinner={winner === country2} />
    </div>
  );
}
