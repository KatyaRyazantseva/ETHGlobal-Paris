import { Button, FormControl, Stack, TextField, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormEventHandler } from "react";

function SposorForm() {
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();
    console.dir(e.currentTarget.fullname.value);

    try {
      const response = await fetch("/api/Contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: e.currentTarget.fullname.value,
          email: e.currentTarget.email.value,
          message: e.currentTarget.message.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    target.reset();
    router.push("/thankyou");
  };

  return (
    <Stack direction="column" alignItems="center" sx={{ m: "2em" }}>
      <h1> Empower the Future of Web3: Be a Catalyst for Change!</h1>
      <p>
        Join us in transforming lives through education and opportunity. At
        DaoDemic, we're dedicated to empowering aspiring developers to thrive in
        the Web3 world
      </p>

      <p>
        By providing grants for bootcamps, internships, hackathons, and
        conferences, you can help shape the next generation of Web3 experts.
      </p>

      <p>
        {" "}
        As a sponsor, you'll be recognized for your vital support and gain
        exposure by showcasing your products to our diverse community of future
        Web3 developers.
      </p>

      <p>
        Let's create a brighter future together. Fill the form below to discuss
        your involvement:
      </p>

      <form onSubmit={handleSubmit}>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Stack
            sx={{
              width: "100%",
              mb: "3rem",
              [theme.breakpoints.down("md")]: { width: "90%" },
            }}
          >
            <TextField
              id="fullname"
              name="fullname"
              label="Name:"
              variant="outlined"
              required
              margin="dense"
              sx={{ backgroundColor: "#beb0b05c" }}
            >
              Name
            </TextField>
            <TextField
              id="email"
              name="email"
              label="E-mail:"
              variant="outlined"
              required
              margin="dense"
              sx={{ backgroundColor: "#beb0b05c" }}
            >
              Email
            </TextField>
            <TextField
              id="message"
              name="message"
              label="Reason for dropping by:"
              variant="outlined"
              required
              multiline
              margin="dense"
              sx={{ backgroundColor: "#beb0b05c" }}
              rows={6}
            >
              Message
            </TextField>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
              <Button
                sx={{
                  width: "100%",
                  mt: "2rem",
                  color: "#E5e1f9",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>{" "}
          </Stack>{" "}
        </Stack>
      </form>
    </Stack>
  );
}

export default SposorForm;
