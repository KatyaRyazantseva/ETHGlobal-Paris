import React from "react";
import data from "../../public/Data/data";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import Image from "next/image";

function MissionsInfo() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("DETAILS: ", data);

  let element = data.find((ele) => ele.slug === slug);

  return (
    <Stack direction="column" sx={{ m: "2em" }}>
      <Stack direction="row">
        <Image
          height={100}
          width={100}
          alt="partner logo"
          src={element?.logoUrl ?? "/"}
        />
        <h1>{element?.partnerName}</h1>
      </Stack>
      <h2>{element?.description}</h2>
    </Stack>
  );
}

export default MissionsInfo;
