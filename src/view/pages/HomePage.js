import { Box } from "@mui/material";

import Simulate from "../../nonview/core/Simulate";

import StageView from "../atoms/StageView";
import CustomBottomNavigation from "../molecules/CustomBottomNavigation";

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
    <Box>
      <table>
        <tbody>
          <tr>{renderedInner}</tr>
        </tbody>
      </table>
      <CustomBottomNavigation />
    </Box>
  );
}
