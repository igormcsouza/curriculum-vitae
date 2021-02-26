import React from "react";
import {
  createStyles,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    skillBox: {
      marginLeft: "auto",
      marginRight: "auto",
      margin: "50px 0px",
    },
  })
);

const Skill: React.FC<{}> = () => {
  const classes = useStyle();

  return (
    <Grid
      container
      justify="space-between"
      direction="row"
      className={classes.skillBox}
    >
      <Grid item xs={12} md={5}>
        <p style={{ textAlign: "justify" }}>
          Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi.
          Mauris aliquet nunc non turpis scelerisque, eget. Atirei o pau no
          gatis, per gatis num morreus. Paisis, filhis, espiritis santis.
          Posuere libero varius.
          <br />
          <br />
          Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Aenean
          aliquam molestie leo, vitae iaculis nisl. Per aumento de cachacis, eu
          reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
          Manduma pindureta quium dia nois paga.
        </p>
      </Grid>
      <Grid item xs="auto">
        <Hidden mdUp lgUp xlUp>
          <Divider
            style={{ backgroundColor: "whitesmoke" }}
            orientation="vertical"
            variant="middle"
          />
        </Hidden>
        <Hidden xsUp smUp>
          <Divider
            style={{ backgroundColor: "whitesmoke" }}
            orientation="horizontal"
            variant="middle"
          />
        </Hidden>
      </Grid>
      <Grid item alignItems="center" xs={12} md={5}>
        <ul style={{ textAlign: "justify" }}>
          <li>Mussum Ipsum, cacilds vidis litro abertis.</li>
          <li>Praesent vel viverra nisi.</li>
          <li>Mauris aliquet nunc non turpis scelerisque, eget.</li>
          <li>Atirei o pau no gatis, per gatis num morreus.</li>
          <li>
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Skill;
