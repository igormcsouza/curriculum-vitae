import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      maxWidth: "100%",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Home />
    </Container>
  );
}

export default App;
