import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Articulos from "./Articulos";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background: "#689C56",
    borderRadius: "60px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  inside: {
    padding: theme.spacing(3, 2),
    background: "#90A337",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)",

    borderRadius: "100px"
  }
}));

export default function Carrito() {
  const classes = useStyles();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="container-fluid w3-border-red w3-animate-bottom col-xs-1"
        align="center"
      >
        <Paper className={classes.root}>
          <Typography variant="h3" component="h3">
            Carrito
          </Typography>
          <br />
          <br />
          <br />
          <Paper className={classes.inside}>
            <Typography variant="h3" component="h3">
              Productos
            </Typography>
            <Articulos />
            <br />
            <br />
          </Paper>
          <br />
          <br />
          <br />
          <Paper className={classes.inside}>
            <Typography variant="h3" component="h3">
              Total
            </Typography>
          </Paper>
          <br />
          <br />
          <br />
        </Paper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
