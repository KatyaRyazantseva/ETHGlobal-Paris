import { AppBar, Stack, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

function Navbar() {
  const SocialLoginDynamic = dynamic(
    () => import("../Autentication/scw").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        px: 3,
        py: 2.5,
        bgcolor: "transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap={3} alignItems="center">
          <Link href="/">
            <Image
              src="/Images/Logo/logo2.png"
              height={80}
              width={80}
              alt="logo"
            />
          </Link>
          <Link href="/">
            <Typography>DaoDemic</Typography>
          </Link>
        </Stack>
        <Suspense fallback={<div>Loading...</div>}>
          <SocialLoginDynamic />
        </Suspense>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
