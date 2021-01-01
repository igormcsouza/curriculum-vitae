import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      boxShadow: "none",
      zIndex: theme.zIndex.drawer + 1,
    },
    nav: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  })
);

export default function Menu() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} color="transparent">
      <Toolbar className={classes.nav}>
        <Button color="primary" href="#">
          <strong>Sobre</strong>
        </Button>
        <Button color="primary" href="#">
          <strong>Experiências</strong>
        </Button>
        <Button color="primary" href="#">
          <strong>Educação</strong>
        </Button>
        <Button color="primary" href="#">
          <strong>Habilidades</strong>
        </Button>
        <Button color="primary" href="#">
          <strong>Portifólio</strong>
        </Button>
        <Button color="primary" href="#">
          <strong>Certificações</strong>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
