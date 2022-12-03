import { Component } from "react";

import { Box, CircularProgress } from "@mui/material";

import Simulate from "../../nonview/core/Simulate";

import StageView from "../atoms/StageView";
import CustomBottomNavigation from "../molecules/CustomBottomNavigation";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { simulationResults: null };
  }

  componentDidMount() {
    this.refresh();
  }
  refresh() {
    const simulationResults = Simulate.random();
    this.setState({ simulationResults });
  }

  onClickRefresh() {
    this.refresh();
  }

  render() {
    const { simulationResults } = this.state;
    if (!simulationResults) {
      return <CircularProgress />;
    }

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
        <CustomBottomNavigation
          onClickRefresh={this.onClickRefresh.bind(this)}
        />
      </Box>
    );
  }
}
