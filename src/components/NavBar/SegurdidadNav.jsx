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

import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

import StorefrontIcon from "@material-ui/icons/Storefront";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

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

import AgregarUsuario from "../Usuarios/AgregarUsuario";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  style: {
    color: "#FFF",
    textDecoration: "none"
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

export default function SeguridadNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" noWrap>
              E-Food > Seguridad
            </Typography>
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
            <Link className={classes.style} to="/seguridad">
              <ListItem className={classes.style} button key={"Usuarios"}>
                <ListItemIcon>
                  <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <React.Fragment>
            <Switch>
              <Route path="/seguridad">
                <div>
                  <AgregarUsuario />
                </div>
              </Route>
            </Switch>
          </React.Fragment>
        </main>
      </Router>
    </div>
  );
}
