import Simulate from "../../nonview/core/Simulate";

function GameView({ t1, t2 }) {
  return (
    <div>
      <div>{t1}</div>
      <div>{t2}</div>
    </div>
  );
}

function StageView({ gameList }) {
  const renderedInner = gameList.map(function ([t1, t2]) {
    return <GameView t1={t1} t2={t2} />;
  });
  return <td>{renderedInner}</td>;
}

export default function HomePage() {
  const simulationResults = Simulate.random();
  const renderedInner = Object.values(simulationResults).map(function (
    gameList
  ) {
    return <StageView gameList={gameList} />;
  });

  return (
    <table>
      <tbody>
        <tr>{renderedInner}</tr>
      </tbody>
    </table>
  );
}
