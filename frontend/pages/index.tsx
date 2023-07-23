import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../public/Data/data";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          m: "0.5em",
          p: "1em",
        }}
      >
        <Typography sx={{ fontSize: "1.375rem", alignSelf: "flex-start" }}>
          {" "}
          17 projects available
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            m: "auto",
            p: "1rem",
          }}
        >
          <Grid item md={8}>
            <Grid
              container
              gap={2}
              sx={{
                m: "auto",
                p: "1rem",
              }}
            >
              {data.map((mission) => {
                return (
                  <Grid
                    item
                    key={mission.description}
                    md={12}
                    sx={{
                      p: "1rem",
                      border: "1px solid transparent",
                      borderRadius: "10px",
                      backgroundColor: "#1C1C1E",
                    }}
                  >
                    <Button
                      sx={{ color: "#FFFFFF", width: "100%" }}
                      href={`/${mission.slug}`}
                    >
                      <Stack direction="column" sx={{ width: "100%" }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignContent="center"
                          alignItems="center"
                          alignSelf="flex-end"
                          sx={{ width: "100%" }}
                        >
                          <Typography fontSize="1.375rem">
                            {`$ ${mission.amountGrant}`}
                          </Typography>
                          <Stack direction="row" alignItems="center">
                            <Image
                              height={40}
                              width={40}
                              alt="logo partner"
                              src={mission.logoUrl}
                            />
                            <Typography>{mission.partnerName}</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Typography>{mission.name}</Typography>
                          <Typography>{mission.description}</Typography>
                        </Stack>
                      </Stack>
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Stack direction="column" sx={{ width: "90%" }}>
              <Stack
                direction="column"
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "10px",
                  backgroundColor: "#1C1C1E",
                  padding: "0.5em",
                }}
              >
                <Typography sx={{ fontSize: "2.125rem" }}>$2250 DD</Typography>
                <Typography sx={{ fontSize: "1.0625rem", color: "#8E8E93" }}>
                  Collected
                </Typography>
                <Button
                  href="/products"
                  sx={{
                    display: "flex",
                    p: "0.875rem 1.25rem",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: " 0.875rem",
                    backgroundColor: "#0385FF",
                    color: "#FFFFFF",
                    mt: "2rem",
                  }}
                >
                  Redeem
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default index;
