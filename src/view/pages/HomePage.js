import { Component } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import Format from "../../nonview/core/Format";
import Simulate from "../../nonview/core/Simulate";

import StageView from "../atoms/StageView";
import CustomBottomNavigation from "../molecules/CustomBottomNavigation";
import CustomHeader from "../molecules/CustomHeader";

const MIN_N_REFRESH = 2;
const MAX_N_REFRESH = 10;
const TIME_MS_REFRESH = 50;

const STYLE_BODY = {
  marginTop: 40,
  marginBottom: 40,
  marginLeft: 20,
  overflow: "scroll",
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const maxNRefresh =
      MIN_N_REFRESH + parseInt(Math.random() * (MAX_N_REFRESH - MIN_N_REFRESH));
    this.state = {
      simulationResults: null,
      nRefresh: 0,
      maxNRefresh,
      cupProbability: null,
      mode: "normal",
    };
  }

  componentDidMount() {
    this.refresh();
  }
  refresh(mode) {
    const { nRefresh, maxNRefresh } = this.state;
    const simulationResults = Simulate.random(mode);
    const cupProbability = Simulate.getCupProbability(simulationResults);
    this.setState({
      simulationResults,
      cupProbability,
      mode,
      nRefresh: nRefresh + 1,
    });

    if (nRefresh < maxNRefresh) {
      setTimeout(
        function () {
          this.refresh(mode);
        }.bind(this),
        TIME_MS_REFRESH
      );
    }
  }

  onClickMode(mode) {
    this.setState(
      { nRefresh: 0 },
      function () {
        this.refresh(mode);
      }.bind(this)
    );
  }

  render() {
    const { simulationResults, cupProbability } = this.state;
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
          <Typography variant="caption" sx={{ fontSize: "50%" }}>
            Probability of this Scenario
          </Typography>
          <Typography variant="h5">
            {Format.fraction(cupProbability)}
          </Typography>
          <table>
            <tbody>
              <tr>{renderedInner}</tr>
            </tbody>
          </table>
          <Typography variant="caption">Last Updated: Dec 3</Typography>
        </Box>
        <CustomBottomNavigation onClickMode={this.onClickMode.bind(this)} />
      </Box>
    );
  }
}
