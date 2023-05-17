import React, { useState } from "react";
import { Container, Box, Paper, Stack, Button } from "@mui/material";

export default function QuoteGenerator() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    const random = Math.floor(Math.random() * 10 + 1);
    setIndex(random);
    console.log(random);
  }

  const quotes = [
    {
      quote: "Be yourself; everyone else is already taken",
      writtenBy: "Oscar Wilde",
    },
    {
      quote:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
      writtenBy: "Marilyn Monroe",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
      writtenBy: "Albert Einstein",
    },
    {
      quote: "So many books, so little time",
      writtenBy: "Frank Zappa",
    },
    {
      quote: "A room without books is like a body without a soul",
      writtenBy: "Marcus Tullius Cicero",
    },
    {
      quote:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      writtenBy: "Bernard M. Baruch",
    },
    {
      quote:
        "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth",
      writtenBy: "William W. Purkey",
    },
    {
      quote:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
      writtenBy: "Dr. Seuss",
    },
    {
      quote: "You only live once, but if you do it right, once is enough",
      writtenBy: "Mae West",
    },
    {
      quote: "Be the change that you wish to see in the world",
      writtenBy: "Mahatma Gandhi",
    },
    {
      quote:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
      writtenBy: "Marilyn Monroe",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor="#f9c5ba"
    >
      <Paper
        elevation={3}
        sx={{
          width: "50vw",
          height: "40vh",
          borderRadius: "5px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          p: 10,
        }}
      >
        <h2>" {quotes[index].quote} "</h2>
        <div> - {quotes[index].writtenBy}</div>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Next Quote
        </Button>
      </Paper>
    </Box>
  );
}
