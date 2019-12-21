//! Cards de los productos a mostrar
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import Tooltip from "@material-ui/core/Tooltip";
import HomeCliente from "./HomeCliente";
import axios from "axios";
import swal from "sweetalert";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    borderRadius: "20px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
export default function Cards({
  titulo,
  descripcion,
  foto,
  ingredientes,
  precio,
  key,
  avatar,
  carrito,
  ID_Producto
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [articulo, setArticulo] = useState(1);
  const [cantidad, setCantidad] = useState(0);
  let datos = {};

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const guardar = async event => {
  //   try {
  //     datos = {
  //       ID_Producto: ID_Producto,
  //       Nombre: titulo,
  //       Descripcion: descripcion,
  //       Precio: precio,
  //       Cantidad: cantidad,
  //       Foto: foto
  //     };

  //     await axios.post(
  //       "https://10.211.55.3:44353/api/Content/PostCarrito",
  //       datos
  //     );
  //   } finally {
  //     console.log(datos);
  //   }
  // };




  const guardar = async  () => {
    datos = {
            ID_Producto: ID_Producto,
            Nombre: titulo,
            Descripcion: descripcion,
            Precio: precio,
            Cantidad: cantidad +1,
            Foto: foto
          };
    //  fetch(`https://10.211.55.3:45455/api/Content/PostCarrito`, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(datos)
    // }).catch(error =>{
    //   swal(
    //     `Producto ya agregado, revise el carrito`,
    //     "Para agregar más debe cambiar la cantidad desde el carrito",
    //     "warning"
    //   )
    // })
    

    try {
      const response = await fetch('https://10.211.55.3:45455/api/Content/PostCarrito', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log(json.Message);
       if (json.Message === "bad" ) {
       
         await swal(
           "Error",
           "Para agregar más productos hacerlo desde el carrito",
           "error"
         )
      } else {
        await swal(
          "Producto agregado al carrito!",
          "Seguí comprando =)",
          "warning"
        )
      }

    } catch (error) {
      
    }
    
  }


  return (
    <div className=" container-fluid w3-border-red w3-animate-zoom col-xs-1">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          key={key}
          title={<h5> {titulo} </h5>}
        />
        <CardMedia className={classes.media} image={foto} title="Paella dish" />
        <CardContent>
          <div className=" text-center col-xs-12">
            <Typography variant="h6" color="textSecondary" component="p">
              {descripcion}
              <strong>
                <h3>¢ {precio} </h3>
              </strong>
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Agregar al carrito">
            <IconButton
              onClick={() => {
                guardar();
                console.log("Producto agregado");
              }}
            >
              <AddShoppingCartRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredientes:</Typography>
            <Typography paragraph>{ingredientes}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
    </div>
  );
}
