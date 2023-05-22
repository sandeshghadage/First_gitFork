import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { getLocalData } from "../utils";

export default function Home() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const localData = getLocalData();
    const fullName = localData.firstName + " " + localData.lastName;
    setName(fullName);
  }, [name]);

  console.log(name);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        pt: 10,
      }}
    >
      <Typography sx={{ mb: 10 }} variant="h2" color={"white"}>
        Hello, {name}
      </Typography>
      <Button onClick={() => setOpen(true)} variant="outlined">
        Clear
      </Button>
      <Dialog open={open}>
        <DialogTitle> Clear User Data</DialogTitle>
        <DialogContent sx={{ minWidth: "20rem", minHeight: "1rem" }}>
          Are you sure you want to clear
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            close
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("userData");
              setOpen(false);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
