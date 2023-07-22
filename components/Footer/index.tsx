import { AppBar, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function Footer() {
  const theme = useTheme();
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        bottom: 0,
        top: "auto",
        bgcolor: "background.default",
        [theme.breakpoints.up("sm")]: { position: "fixed" },
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          <Button href="/">Telegram</Button>
          <Button href="/">Discord</Button>
        </Stack>
        <Typography color="black"> © 2023 DD</Typography>
      </Stack>
    </AppBar>
  );
}

export default Footer;
