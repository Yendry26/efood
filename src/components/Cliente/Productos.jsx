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

import Cards from './Cards'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
    }));

export default function Productos() {
  const classes = useStyles();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const response = await fetch(`https://10.211.55.3:45455/api/content/GetProducto`)
      .then(res => res.json())
      .then(data => {
          //! Busca el usuario y la contrasena
        console.log(data);
        setProductos(data);

      })
      .catch(() =>
        swal(
          "No se pudo conectar al servidor",
          "API no está corriendo",
          "error"
        )
      );
  };

  return (
    <Container  maxWidth="md">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      {/* End hero unit */}
      <Grid container className={classes.root} spacing={2}>
      <Cards
              titulo="{producto.Nombre}"
              descripcion="{producto.Descripcion}"
              foto="https://source.unsplash.com/random?food'"
            />
             <Cards
              titulo="{producto.Nombre}"
              descripcion="{producto.Descripcion}"
              foto="https://source.unsplash.com/random?brunch'"

            />
             <Cards
              titulo="{producto.Nombre}"
              descripcion="{producto.Descripcion}"
              foto="https://source.unsplash.com/random?brunch'"

            />
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}


/**
 * 
 * 
           {productos.map(producto => (
          <Grid item xs={6} sm={6} md={4}>
            <Cards
              titulo={producto.Nombre}
              descripcion={producto.Descripcion}
            />
          </Grid>
          ))}
 */