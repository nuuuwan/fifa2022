import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import CasinoIcon from "@mui/icons-material/Casino";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};
const COLOR_ICON = '#800'

export default function CustomBottomNavigation({ onClickRefresh }) {
  return (
    <Box style={STYLE}>
      <BottomNavigation>
        <BottomNavigationAction
          icon={<CasinoIcon style={{color: COLOR_ICON, fontSize: "48px"}} />}
          onClick={onClickRefresh}
        />
      </BottomNavigation>
    </Box>
  );
}
