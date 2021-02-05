import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
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
    <div className={classes.home}>
      <Presentation />
      <Skill />
    </div>
  );
};

export default Home;
