import React from "react";
import { createStyles, Divider, makeStyles, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    skillBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100%",
    },
    background: {
      height: 400,
      maxWidth: 600,
      textAlign: "justify",
      display: "flex",
      alignItems: "center",
    },
    skills: {
      heitght: 400,
      maxWidth: 600,
      textAlign: "justify",
      display: "flex",
      alignItems: "center",
    },
  })
);

const Skill: React.FC<{}> = () => {
  const classes = useStyle();

  return (
    <div className={classes.skillBox}>
      <div className={classes.background}>
        Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi.
        Mauris aliquet nunc non turpis scelerisque, eget. Atirei o pau no gatis,
        per gatis num morreus. Paisis, filhis, espiritis santis. Posuere libero
        varius.
        <br />
        <br />
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Aenean
        aliquam molestie leo, vitae iaculis nisl. Per aumento de cachacis, eu
        reclamis. Leite de capivaris, leite de mula manquis sem cabeça. Manduma
        pindureta quium dia nois paga.
      </div>
      <Divider
        style={{ backgroundColor: "whitesmoke" }}
        flexItem={true}
        orientation="vertical"
        variant="middle"
      />
      <div className={classes.skills}>
        <ul>
          <li>Mussum Ipsum, cacilds vidis litro abertis.</li>
          <li>Praesent vel viverra nisi.</li>
          <li>Mauris aliquet nunc non turpis scelerisque, eget.</li>
          <li>Atirei o pau no gatis, per gatis num morreus.</li>
          <li>
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
