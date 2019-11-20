import React from "react";
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
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

import AdminUsuarios from "../Usuarios/AdminUsuarios";
import Tabla from "../Usuarios/Tabla";
import SignInSide from "../Login/SignInSide";
import AgregarUsuario from "../Usuarios/AgregarUsuario";
import SignUp from "../Login/SignUp";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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

export default function ClippedDrawer() {
  const classes = useStyles();

  const cambioCuerpo = cuerpo => {
    if (cuerpo === "admin") {
      return (
        <div>
          <Tabla />
          <AgregarUsuario />
        </div>
      );
    } else {
      return <SignInSide />;
    }
  };

  function cambioDeNav(usuario) {
    if (usuario === "jose") {
      return (
        <List>
          <ListItem button key={"Tienda"}>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary={"Tienda"} />
          </ListItem>
          <ListItem button key={"Cupones"}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={"Cupones"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              console.log("I'm a button.");
            }}
            key={"Pedidos"}
          >
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary={"Pedidos"} />
          </ListItem>
        </List>
      );
    } else {
      return (
        <List>
          <ListItem button key={"Usuarios"}>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText primary={"Usuarios"} />
          </ListItem>
        </List>
      );
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            E-Food
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
        {cambioDeNav("jose")}
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <React.Fragment>{cambioCuerpo("admin")}</React.Fragment>
      </main>
    </div>
  );
}
