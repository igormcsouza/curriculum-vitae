import React from "react";
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
      margin: "35px 0px 35px 0px",
    },
    innerText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "600px",
      textAlign: "center",
    },
    iconsDisposition: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  })
);

const Presentation: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerBox}>
      <div>
        <div className={classes.innerText}>
          <h1>Hello! I'm Igor Souza</h1>
          <h2>I'm a FullStack Developer and Data Scientist.</h2>
          <h5>
            I love to develop new ideas and innovations! In my free time, I play
            basketball and guitar! My favorite color is green!
          </h5>
        </div>
        <div className={classes.iconsDisposition}>
          <IconButton href="https://www.linkedin.com/in/igormcsouza/">
            <LinkedInIcon
              color="secondary"
              fontSize="large"
              style={{ margin: 10 }}
            />
          </IconButton>
          <IconButton href="https://www.instagram.com/igormcsouza/?hl=pt-br">
            <InstagramIcon
              color="secondary"
              fontSize="large"
              style={{ margin: 10 }}
            />
          </IconButton>
          <IconButton href="https://github.com/igormcsouza">
            <GitHubIcon
              color="secondary"
              fontSize="large"
              style={{ margin: 10 }}
            />
          </IconButton>
        </div>
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
