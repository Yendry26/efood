import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormaPago from "./FormaPago";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function MaterialTableDemo() {
  const [data, setData] = React.useState();
  const [cantidad, setCantidad] = React.useState(0);
  const [res, setRes] = React.useState(0);
  let total = 0;

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const response = await fetch(
      `https://10.211.55.3:45455/api/content/GetCarrito`
    )
      .then(res => res.json())
      .then(data => {
        //! Busca el usuario y la contrasena
        data.forEach(el => {
          total = total + el.Cantidad * el.Precio;
          setCantidad(total);
        });
        setRes(total)
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>
              <strong>{res}</strong>
            </h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
