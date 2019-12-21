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
import Paper from '@material-ui/core/Paper';
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

export default function ArmarCarrito() {
  const classes = useStyles();
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion] = useState("");
  const [precio, setPrecio] = useState("");
  let arreglo = [];

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

  console.log(productos, 'prdsadsd')

  const isFull = () =>{
    if (!productos) {
        return (
            <Grid container className={classes.root} spacing={2}>
            {productos.map(producto => (
              <Grid item xs={6} sm={6} md={4}>
                <Articulos
                  ID_Producto={producto.ID_Producto}
                  nombre={producto.Nombre}
                  descripcion={producto.Descripcion}
                  precio={producto.Precio}
                  cantidad={producto.Cantidad}
                  foto={"https://source.unsplash.com/random?fastfood"}
                  key={producto.ID_Producto}
                />
              </Grid>
            ))}
          </Grid>
        )
    } else {
        return (
            <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  );
        
    }
}

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
