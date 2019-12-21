//! Busca la data del LOCAL Storage para mostrar como un card
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import swal from "sweetalert";
import Articulos from "./Articulos";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function Productos() {
  const classes = useStyles();
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion] = useState("");
  const [precio, setPrecio] = useState("");
  let arreglo = [];

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = () => {

    let keys = Object.keys(localStorage);
    for (let key of keys) {
      arreglo.push(JSON.parse(localStorage.getItem(key)));
    }
    console.log(arreglo);
  };

  return (
    <Container maxWidth="md">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* End hero unit */}
      <Grid container className={classes.root} spacing={2}>
        {arreglo.map(producto => (
          <Grid item xs={6} sm={6} md={4}>
            <Articulos
              ID_Producto={producto.ID_Producto}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              foto={"https://source.unsplash.com/random?fastfood"}
              precio={producto.precio}
              key={producto.ID_Producto}
            />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

/**
 * 
 * 

 */
