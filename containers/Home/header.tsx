import { Button, Stack, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ m: "2em", p: "1em", width: "90%" }}
      >
        <Typography
          sx={{
            fontFamily: "Moonbright",
            fontSize: "70px",
            alignSelf: "flex-start",
          }}
        >
          DaoDemic
        </Typography>
        <Stack direction="row" gap={3}>
          <Button
            href="/"
            sx={{
              backgroundColor: "#6a6161",
              border: "1px solid transparent",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Get some tokens
          </Button>
          <Button
            href="/"
            sx={{
              backgroundColor: "#6a6161",
              border: "1px solid transparent",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Spend your tokens
          </Button>
        </Stack>
        <hr
          style={{
            border: "2px solid blue",
            borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
          }}
        />
      </Stack>
    </>
  );
}

export default Header;
