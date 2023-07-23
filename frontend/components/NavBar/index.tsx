import { AppBar, Button, Stack, Typography } from "@mui/material";
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
        py: 1,
        bgcolor: "transparent",
        backdropFilter: "blur(8px)",
        borderBottom: "0.8px solid white",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap={3} alignItems="center">
          <Link href="/">
            <Image
              src="/Images/Logo/logo2.png"
              height={50}
              width={50}
              alt="logo"
            />
          </Link>
          <Link href="/">
            <Typography fontFamily="Moonbright" fontSize={40}>
              DaoDemic
            </Typography>
          </Link>

          <Button
            href="/"
            sx={{
              border: "1px solid transparent",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Projects
          </Button>
          <Button
            href="/products"
            sx={{
              border: "1px solid transparent",
              borderRadius: "2px",
              color: "white",
            }}
          >
            Redeem
          </Button>
          <Button
            href="/sponsors"
            sx={{
              border: "1px solid transparent",
              borderRadius: "2px",
              color: "white",
            }}
          >
            Sponsors
          </Button>
        </Stack>
        <Suspense fallback={<div>Loading...</div>}>
          <SocialLoginDynamic />
        </Suspense>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
