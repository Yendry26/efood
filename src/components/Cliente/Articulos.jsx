//! Cards de los productos a mostrar en el carrito
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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    maxHeight: 100,
    borderRadius: "20px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  media: {
    height: 0
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
    backgroundColor: "#375CA3"
  }
}));
export default function Articulos({
  nombre,
  descripcion,
  precio,
  key,
  avatar,
  ID_Producto,
  foto, cantidad
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [articulo, setArticulo] = useState(1);

  const getLocalStorage = () => {
    window.localStorage.getItem(3);
  };


  return (
    <div className=" container-fluid w3-border-red w3-animate-zoom col-xs-1">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <div>
              <Tooltip title="Eliminar">
                <IconButton>
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    onClick={() => console.log("vavavas")}
                  >
                    {"❌"}
                  </Avatar>
                </IconButton>
              </Tooltip>
        
              <Tooltip title="Editar">
                <IconButton>
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    onClick={() => console.log("vavavas")}
                  >
                    {"✏️"}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </div>
          }
          key={key}
          title={
            <div>
              <span> {nombre} | </span>
              <span> {descripcion} | </span>
              <span> {cantidad} </span>
            </div>
          }
        />
        <CardMedia className={classes.media} image={foto} title="Paella dish" />
      </Card>
      <br />
    </div>
  );
}
