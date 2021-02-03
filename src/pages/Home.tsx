import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Presentation from "../components/Presentation";

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
    </div>
  );
};

export default Home;
