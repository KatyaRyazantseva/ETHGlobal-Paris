import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import productData from "../public/Data/productData";
import Image from "next/image";

function products() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        m: "1em 6em",
        p: "1em",
      }}
    >
      <Grid
        container
        gap={0.5}
        sx={{
          m: "auto",
          p: "1rem",
        }}
      >
        {productData.map((product) => {
          return (
            <Grid
              item
              key={product.description}
              xs={12}
              sm={12}
              md={2.625}
              sx={{
                p: "1rem",
                border: "1px solid transparent",
                borderRadius: "10px",
                backgroundColor: "#1C1C1E",
              }}
            >
              <Button
                sx={{ color: "#2e2d2d" }}
                href={`/products/${product.slug}`}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignContent="center"
                >
                  <Typography
                    sx={{
                      fontSize: "1.375rem",
                      color: "#FFFFFF",
                      fontWeight: "590",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.0625rem",
                      color: "#8E8E93",
                      textTransform: "capitalize",
                      fontWeight: "400",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    sx={{
                      p: "0.375rem 0.75rem",

                      backgroundColor: "#0385FF",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      color: "#fff",
                    }}
                  >{`Buy for $${product.price}`}</Button>
                </Stack>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default products;
