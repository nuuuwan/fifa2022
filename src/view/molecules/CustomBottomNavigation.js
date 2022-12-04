import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import CasinoIcon from "@mui/icons-material/Casino";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

const STYLE = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};

export default function CustomBottomNavigation({ onClickMode }) {
  return (
    <Box style={STYLE}>
      <BottomNavigation>
        <BottomNavigationAction
          icon={
            <VerticalAlignBottomIcon
              style={{ color: "#800", fontSize: "32px" }}
            />
          }
          onClick={() => onClickMode("worst")}
        />
        <BottomNavigationAction
          icon={<CasinoIcon style={{ color: "#f80", fontSize: "32px" }} />}
          onClick={() => onClickMode("normal")}
        />
        <BottomNavigationAction
          icon={
            <VerticalAlignTopIcon style={{ color: "#080", fontSize: "32px" }} />
          }
          onClick={() => onClickMode("best")}
        />
      </BottomNavigation>
    </Box>
  );
}
