import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "50px",
      paddingBottom: "50px",
      height: "100%",
      maxWidth: "200px",
    },
  })
);

function ProfileBox() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
    >
      <Grid item>
        <p>img</p>
      </Grid>
      <Grid item>
        <p>Igor Souza</p>
      </Grid>
      <Grid item>
        <p>my Statement</p>
      </Grid>
      <Grid item>
        <p>working at Dell Lead</p>
      </Grid>
    </Grid>
  );
}

export default ProfileBox;
