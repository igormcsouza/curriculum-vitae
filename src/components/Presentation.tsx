import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
    },
    innerTitleBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "600px",
      textAlign: "center",
    },
  })
);

const Presentation: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerBox}>
      <div className={classes.innerTitleBox}>
        <h1>Hello! I'm Igor Souza</h1>
        <h2>I'm a FullStack Developer and Data Scientist.</h2>
        <h5>
          I love to develop new ideas and innovations! In my free time, I play
          basketball and guitar! My favorite color is green!
        </h5>
      </div>
      <div>
        <img
          width="600px"
          height="600px"
          style={{ borderRadius: 32 }}
          src="https://github.com/igormcsouza.png"
          alt="Igor Souza"
        />
      </div>
    </div>
  );
};

export default Presentation;
