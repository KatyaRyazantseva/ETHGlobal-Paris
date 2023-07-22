import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../public/Data/data";

import { Button, Grid, Stack, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          height: "100vh",
          m: "2em",
          p: "1em",
        }}
      >
        <Grid
          container
          gap={1}
          sx={{
            m: "auto",
            p: "1rem",
            border: "1px solid #fff",
            backgroundColor: "#cbc2c2",
          }}
        >
          {data.map((mission) => {
            return (
              <Grid
                item
                key={mission.description}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  p: "1rem",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  backgroundColor: "rgb(150 178 192)",
                }}
              >
                <Button sx={{ color: "#2e2d2d" }} href={`/${mission.slug}`}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignContent="center"
                  >
                    <Image
                      height={40}
                      width={40}
                      alt="logo partner"
                      src={mission.logoUrl}
                    />
                    <Typography>{mission.partnerName}</Typography>
                    <Typography>{mission.name}</Typography>
                    <Typography>{mission.description}</Typography>
                  </Stack>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default index;
