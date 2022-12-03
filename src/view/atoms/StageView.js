import GameView from "./GameView";

export default function StageView({ stageType, gameList, gameList2 }) {
  const renderedInner = gameList.map(function ([country1, country2], iGame) {
    const key = "game-" + iGame;
    const iGame2A = parseInt(iGame / 2);
    const iGame2B = iGame % 2;
    const winner = gameList2[iGame2A][iGame2B];
    return (
      <GameView
        stageType={stageType}
        iGame={iGame}
        key={key}
        country1={country1}
        country2={country2}
        winner={winner}
      />
    );
  });
  return <td>{renderedInner}</td>;
}
