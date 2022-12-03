import GameView from "./GameView";

export default function StageView({ gameList }) {
  const renderedInner = gameList.map(function ([t1, t2], iGame) {
    const key = "game-" + iGame;
    return <GameView key={key} t1={t1} t2={t2} />;
  });
  return <td>{renderedInner}</td>;
}
