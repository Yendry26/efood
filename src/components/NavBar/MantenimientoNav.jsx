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
import FastfoodIcon from '@material-ui/icons/Fastfood';

import Cupones from "../Administracion/Cupones";
import LineasComida from "../Administracion/LineasComida";
import Productos from "../Administracion/Productos";
import TiposPrecio from "../Administracion/TiposPrecio";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  style: { 
    color : "#FFF",
    textDecoration : "none"

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

export default function MantenimientoNav() {
  const classes = useStyles();
  const handleExit = event => {
    event.preventDefault();
    console.log("saliendo");

    window.location.replace("http://localhost:3000/login");
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" noWrap>
              E-Food > Mantenimiento
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
             <Link  className={classes.style} to="/Productos">
              <ListItem className={classes.style} button key={"Productos"}>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/Cupones">
              <ListItem className={classes.style} button key={"Cupones"}>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary={"Cupones"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/LineasComida">
              <ListItem className={classes.style} button key={"LineasComida"}>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary={"LineasComida"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/TiposPrecio">
              <ListItem className={classes.style} button key={"Tipos de Precio"}>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary={"Tipos de Precio"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <React.Fragment>
            <Switch>
              <Route exact path="/Productos">
                <Productos />
              </Route>
              <Route exact path="/TiposPrecio">
                <TiposPrecio />
              </Route>
              <Route exact path="/Cupones">
                <Cupones />
              </Route>
              <Route exact path="/LineasComida">
                <LineasComida />
              </Route>
            </Switch>
          </React.Fragment>
        </main>
      </Router>
    </div>
  );
}
