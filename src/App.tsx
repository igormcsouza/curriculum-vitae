import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  Container,
  Grid,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Menu from "./components/Menu";
import ProfileBox from "./components/ProfileBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "60px",
    },
  })
);

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#512da8",
      },
      secondary: {
        main: "#c2185b",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Container className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          direction="row"
          spacing={2}
        >
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <ProfileBox />
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>
            <ElevationScroll>
              <p>Hello World!</p>
            </ElevationScroll>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
