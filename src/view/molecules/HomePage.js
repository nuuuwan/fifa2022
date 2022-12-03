import Simulate from "../../nonview/core/Simulate";

import StageView from "../../view/atoms/StageView";

export default function HomePage() {
  const simulationResults = Simulate.random();
  const renderedInner = Object.values(simulationResults).map(function (
    gameList,
    iStage
  ) {
    const key = "stage-" + iStage;
    return <StageView key={key} gameList={gameList} />;
  });

  return (
    <table>
      <tbody>
        <tr>{renderedInner}</tr>
      </tbody>
    </table>
  );
}
