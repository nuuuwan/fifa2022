import { Component } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import Format from "../../nonview/core/Format";
import Simulate from "../../nonview/core/Simulate";

import CountryView from "../../view/atoms/CountryView";

const N_ITERS = 1000;
const TIME_MS_REFRESH = 100;
const MODE = "normal";

const STYLE = {
  margin: 32,
}

export default class MonteCarloPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryToWins: {},
      iIter: 0,
    };
    this.loaded = false;
  }

  componentDidMount() {
    if (!this.loaded) {
      this.loaded = true;
      this.refresh();
    }
  }
  refresh() {
    let { countryToWins, iIter } = this.state;
    const simulationResults = Simulate.random(MODE);
    const winner = simulationResults.r1[0];

    if (!countryToWins[winner]) {
      countryToWins[winner] = 0;
    }
    countryToWins[winner] += 1;
    iIter += 1;

    this.setState(
      {
        countryToWins,
        iIter,
      },
      function () {
        if (iIter < N_ITERS) {
          setTimeout(
            function () {
              this.refresh();
            }.bind(this),
            TIME_MS_REFRESH / (Math.log10(iIter) + 1)
          );
        }
      }
    );
  }

  render() {
    const { countryToWins, iIter } = this.state;
    if (iIter === 0) {
      return <CircularProgress />;
    }

    const sortedCountryAndWins = Object.entries(countryToWins).sort(function (
      a,
      b
    ) {
      return b[1] - a[1];
    });

    return (
      <Box style={STYLE}>
        <table>
          <tbody>
            {sortedCountryAndWins.map(function ([country, nWins]) {
              const key = "country-" + country;
              return (
                <tr key={key}>
                  <td>
                    <CountryView country={country} isWinner={true} />
                  </td>
                  <td>
                    <Typography
                      variant="body1"
                      align="right"
                      sx={{ fontSize: "100%" }}
                    >
                      {nWins}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body1" align="right">
                      {Format.percent(nWins / iIter)}
                    </Typography>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>
                <Typography variant="body1">Total Simulations</Typography>
              </td>
              <td>
                <Typography variant="body1" align="right">
                  {iIter}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    );
  }
}
