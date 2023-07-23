import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import productData from "../public/Data/productData";
import Image from "next/image";

function products() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        height: "100vh",
        m: "0.5em",
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
        {productData.map((product) => {
          return (
            <Grid
              item
              key={product.description}
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
              <Button
                sx={{ color: "#2e2d2d" }}
                href={`/products/${product.slug}`}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignContent="center"
                >
                  <Typography>{product.name}</Typography>
                  <Typography>{product.description}</Typography>
                  <Typography>{`Price: ${product.price}`}</Typography>
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
