import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit() {
    if (firstName != "" && lastName != "" && email != "" && phone != "") {
      const temp = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      };

      localStorage.setItem("userData", JSON.stringify(temp));
    }
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <TextField
        sx={{
          borderRadius: 1,
          color: "white",
          backgroundColor: "white",
          width: "30vw",
        }}
        placeholder="Enter firstname"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        sx={{
          borderRadius: 1,
          color: "white",
          backgroundColor: "white",
          width: "30vw",
        }}
        placeholder="Enter lastname"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        sx={{
          borderRadius: 1,
          color: "white",
          backgroundColor: "white",
          width: "30vw",
        }}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{
          borderRadius: 1,
          color: "white",
          backgroundColor: "white",
          width: "30vw",
        }}
        placeholder="Enter Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button sx={{ mt: 4 }} variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}
