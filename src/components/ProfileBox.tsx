import React from "react";
import { Grid, Avatar, Typography, Link } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import ProfileImage from "../images/profile.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "50px",
      paddingBottom: "50px",
      height: "100%",
      textAlign: "center",
    },
    avatar: {
      margin: "12px 12px",
      height: "175px",
      width: "175px",
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
      alignItems="center"
    >
      <Grid item>
        <Avatar
          className={classes.avatar}
          alt="Igor Souza"
          src={ProfileImage}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4" color="secondary">
          Igor Souza
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" color="secondary">
          I'm super awesome, Mussum Ipsum, cacilds vidis litro abertis. Si u
          mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mé faiz
          elementum girarzis, nisi eros vermeio. Tá deprimidis, eu conheço uma
          cachacis que pode alegrar sua vidis. Todo mundo vê os porris que eu
          tomo, mas ninguém vê os tombis que eu levo!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" color="secondary">
          Currently working at{" "}
          <Link href="http://leadfortaleza.com.br/portal" variant="body2">
            Dell Lead
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ProfileBox;
