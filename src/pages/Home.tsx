import React from "react";
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Presentation from "../components/Presentation";
import Skill from "../components/Skill";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      margin: "30px 50px",
    },
  })
);

const Home: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Container className={classes.home} fixed>
      <Presentation />
      <Skill />
    </Container>
  );
};

export default Home;
