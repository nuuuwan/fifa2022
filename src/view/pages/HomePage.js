import { Component } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import Simulate from "../../nonview/core/Simulate";

import StageView from "../atoms/StageView";
import CustomBottomNavigation from "../molecules/CustomBottomNavigation";
import CustomHeader from "../molecules/CustomHeader";

const MIN_N_REFRESH = 2;
const MAX_N_REFRESH = 10;
const TIME_MS_REFRESH = 100;

const STYLE_BODY = {
  marginTop: 72,
  marginBottom: 72,
  marginLeft: 32,
  overflow: "scroll",
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const maxNRefresh =
      MIN_N_REFRESH + parseInt(Math.random() * (MAX_N_REFRESH - MIN_N_REFRESH));
    this.state = { simulationResults: null, nRefresh: 0, maxNRefresh };
  }

  componentDidMount() {
    this.refresh();
  }
  refresh() {
    const { nRefresh, maxNRefresh } = this.state;
    const simulationResults = Simulate.random();
    this.setState({ simulationResults, nRefresh: nRefresh + 1 });

    if (nRefresh < maxNRefresh) {
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
