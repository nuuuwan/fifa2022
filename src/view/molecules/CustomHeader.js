import { Avatar, Box, Typography } from "@mui/material";

import { Stack } from "@mui/system";

const STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: 12,
  background: "white",
  color: "black",
  zIndex: 1000,
};

export default function CustomHeader() {
  const imageSrc = process.env.PUBLIC_URL + "/logo512.png";
  const onClick = function() {
    window.location.reload();
  }
  return (
    <Box style={STYLE}>
      <Stack direction={"row"} gap={1}>
        <Avatar src={imageSrc} style={{ width: 30, height: 30 }} onClick={onClick} />
        <Typography variant="h5">2022 FIFA World Cup</Typography>
      </Stack>
    </Box>
  );
}
