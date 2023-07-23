import React from "react";
import productData from "../../public/Data/productData";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import Image from "next/image";

function ProductInfo() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("DETAILS: ", productData);

  let element = productData.find((ele) => ele.slug === slug);

  return (
    <Stack direction="column" sx={{ m: "2em" }}>
      <Stack direction="row">
        <h1>{element?.name}</h1>
      </Stack>
      <h2>{element?.description}</h2>
      <h3>{`Price: ${element?.price}`}</h3>
    </Stack>
  );
}

export default ProductInfo;
