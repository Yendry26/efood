import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import StorefrontIcon from "@material-ui/icons/Storefront";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ErrorIcon from "@material-ui/icons/Error";
import PageviewIcon from "@material-ui/icons/Pageview";

import Bitacora from "../Administracion/Bitacora";
import Consecutivos from "../Administracion/Consecutivos";
import Consulta from "../Administracion/Consulta";
import Cupones from "../Administracion/Cupones";
import Errores from "../Administracion/Errores";
import LineasComida from "../Administracion/LineasComida";
import ListasTarjetas from "../Administracion/ListasTajetas";
import Pedidos from "../Administracion/Pedidos";
import ProcesadorPago from "../Administracion/ProcesadorPago";
import Productos from "../Administracion/Productos";
import TiposPrecio from "../Administracion/TiposPrecio";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  style: {
    color: "#FFF",
    textDecoration: "none"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default function AdminNav() {
  const handleExit = event => {
    event.preventDefault();
    console.log("saliendo");

    window.location.replace("http://localhost:3000/login");
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" noWrap>
              E-Food > Admin
            </Typography>
            <Tooltip title="Salir">
              <IconButton
                edge="end"
                aria-haspopup="true"
                onClick={handleExit}
                color="inherit"
              >
                <ExitToAppIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <Link className={classes.style} to="/Productos">
              <ListItem className={classes.style} button key={"Productos"}>
                <ListItemIcon>
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Consecutivos">
              <ListItem className={classes.style} button key={"Consecutivos"}>
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText primary={"Consecutivos"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Cupones">
              <ListItem className={classes.style} button key={"Cupones"}>
                <ListItemIcon>
                  <LoyaltyIcon />
                </ListItemIcon>
                <ListItemText primary={"Cupones"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/LineasComida">
              <ListItem className={classes.style} button key={"LineasComida"}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary={"LineasComida"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Tajetas">
              <ListItem className={classes.style} button key={"Tarjetas"}>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary={"Tarjetas"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Pedidos">
              <ListItem className={classes.style} button key={"Pedidos"}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary={"Pedidos"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/ProcesadorPago">
              <ListItem
                className={classes.style}
                button
                key={"Procesador de Pago"}
              >
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary={"Procesador de Pago"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/TiposPrecio">
              <ListItem
                className={classes.style}
                button
                key={"Tipos de Precio"}
              >
                <ListItemIcon>
                  <VerticalSplitIcon />
                </ListItemIcon>
                <ListItemText primary={"Tipos de Precio"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Bitacora">
              <ListItem className={classes.style} button key={"Bitacora"}>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary={"Bitacora"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Consulta">
              <ListItem className={classes.style} button key={"Consulta"}>
                <ListItemIcon>
                  <PageviewIcon />
                </ListItemIcon>
                <ListItemText primary={"Consulta"} />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className={classes.style} to="/Errores">
              <ListItem className={classes.style} button key={"Errores"}>
                <ListItemIcon>
                  <ErrorIcon />
                </ListItemIcon>
                <ListItemText primary={"Errores"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <React.Fragment>
            <Switch>
              <Route exact path="/Consecutivos">
                <Consecutivos />
              </Route>
              <Route exact path="/Cupones">
                <Cupones />
              </Route>
              <Route exact path="/LineasComida">
                <LineasComida />
              </Route>

              <Route exact path="/ListasTarjetas">
                <ListasTarjetas />
              </Route>

              <Route exact path="/Pedidos">
                <Pedidos />
              </Route>

              <Route exact path="/ProcesadorPago">
                <ProcesadorPago />
              </Route>

              <Route exact path="/Productos">
                <Productos />
              </Route>

              <Route exact path="/TiposPrecio">
                <TiposPrecio />
              </Route>
              <Route exact path="/Bitacora">
                <Bitacora />
              </Route>

              <Route exact path="/Consulta">
                <Consulta />
              </Route>
              <Route exact path="/Errores">
                <Errores />
              </Route>
            </Switch>
          </React.Fragment>
        </main>
      </Router>
    </div>
  );
}
