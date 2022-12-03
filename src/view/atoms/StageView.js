import GameView from "./GameView";

export default function StageView({ gameList }) {
  const renderedInner = gameList.map(function ([country1, country2], iGame) {
    const key = "game-" + iGame;
    return <GameView key={key} country1={country1} country2={country2} />;
  });
  return <td>{renderedInner}</td>;
}
