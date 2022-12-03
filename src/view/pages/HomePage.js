import { Component } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import Simulate from "../../nonview/core/Simulate";

import StageView from "../atoms/StageView";
import CustomBottomNavigation from "../molecules/CustomBottomNavigation";
import CustomHeader from "../molecules/CustomHeader";

const MAX_N_REFRESH = 10;
const TIME_MS_REFRESH = 50;

const STYLE_BODY = {
  position: "fixed",
  top: 72,
  left: 32,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { simulationResults: null, nRefresh: 0 };
  }

  componentDidMount() {
    this.refresh();
  }
  refresh() {
    const simulationResults = Simulate.random();
    const nRefresh = this.state.nRefresh + 1;
    this.setState({ simulationResults, nRefresh });

    if (nRefresh < MAX_N_REFRESH) {
      setTimeout(this.refresh.bind(this), TIME_MS_REFRESH);
    }
  }

  onClickRefresh() {
    this.setState(
      { nRefresh: 0 },
      function () {
        this.refresh();
      }.bind(this)
    );
  }

  render() {
    const { simulationResults } = this.state;
    if (!simulationResults) {
      return <CircularProgress />;
    }

    const nStages = Object.values(simulationResults).length;
    let renderedInner = [];
    for (let iStage = 0; iStage < nStages - 1; iStage++) {
      const stageType = Object.keys(simulationResults)[iStage];
      const gameList = Object.values(simulationResults)[iStage];
      const gameList2 = Object.values(simulationResults)[iStage + 1];
      const key = "stage-" + iStage;
      renderedInner.push(
        <StageView
          key={key}
          stageType={stageType}
          gameList={gameList}
          gameList2={gameList2}
        />
      );
    }

    return (
      <Box>
        <CustomHeader />
        <Box style={STYLE_BODY}>
          <Typography variant="caption">Last Updated: Dec 2</Typography>
          <table>
            <tbody>
              <tr>{renderedInner}</tr>
            </tbody>
          </table>
        </Box>
        <CustomBottomNavigation
          onClickRefresh={this.onClickRefresh.bind(this)}
        />
      </Box>
    );
  }
}
