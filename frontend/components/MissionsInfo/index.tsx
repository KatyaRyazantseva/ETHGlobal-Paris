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
    <Stack direction="column" sx={{ m: "4em" }} alignItems="center">
      <Stack
        direction="row"
        alignSelf="flex-start"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          height={100}
          width={100}
          alt="partner logo"
          src={element?.logoUrl ?? "/"}
        />
        <h1>{element?.partnerName}</h1>
      </Stack>
      <p
        style={{ fontSize: "20px" }}
      >{`Description: ${element?.description}`}</p>
    </Stack>
  );
}

export default MissionsInfo;
