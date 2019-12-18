import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { fade } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import "./Cliente.css";

import Productos from "./Productos";
import Buscar from "./Buscar";
import Pagar from "./Pagar";
import FormaPago from "./FormaPago";


const drawerWidth = 240;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.ulacit.ac.cr/">
        Ulacit
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  toolbar: theme.mixins.toolbar,
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    borderRadius: "25px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    borderRadius: "25px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function HomeCliente() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };


  const hola = () => {
    const dia = "Buenos dias  ";
    const noche = "Buenas noches  ";
    const tarde = "Buenas tardes  ";
    
    const hours = new Date().getHours();
    const isDayTime = hours > 5 && hours < 11;
    const isNoon = hours > 11 && hours < 19;

    if (isDayTime) {
      return (
        <div>
          <h2>
            {dia}
            <WbSunnyIcon />
          </h2>
        </div>
      );
    } else if (isNoon) {
      return (
        <div>
          <h2>
            {tarde}
            <FreeBreakfastIcon />
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            {noche}
            <Brightness3Icon />
          </h2>
        </div>
      );
    }
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Returnn
  return (
    <div className={classes.root}>
            <Router>

      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {hola()}
          </Typography>
          <img height="50" width="50" src="./favicon.ico" alt="" />
          <div className={classes.grow} />
          <div >
          <Tooltip title="Carrito">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Salir">
              <IconButton
                edge="end"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          </div>
  
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
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/Buscar">
              <ListItem className={classes.style} button key={"Buscar"}>
                <ListItemIcon>
                  < SearchIcon />
                </ListItemIcon>
                <ListItemText primary={"Buscar"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/Pagar">
              <ListItem className={classes.style} button key={"Pagar"}>
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary={"Pagar"} />
              </ListItem>
            </Link>
          </List>
          <List>
             <Link  className={classes.style} to="/FormasPago">
              <ListItem className={classes.style} button key={"Formas de Pago"}>
                <ListItemIcon>
                  <FreeBreakfastIcon />
                </ListItemIcon>
                <ListItemText primary={"Formas de Pago"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
      <main className={classes.content}>
        <div>
          <div className={classes.toolbar} />
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                E-Food Happy Shopping!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <img
                  align="center"
                  height="100"
                  width="200"
                  src="https://thumbs.gfycat.com/PlaintiveBrightAfghanhound-size_restricted.gif"
                  alt=""
                />
              </Typography>
            </Container>
          </div>
          <React.Fragment>
            <Switch>
              <Route exact path="/Productos">
                <Productos />
              </Route>
              <Route exact path="/Buscar">
                <Buscar />
              </Route>
              <Route exact path="/Pagar">
                <Pagar />
              </Route>
              <Route exact path="/FormasPago">
                <FormaPago />
              </Route>
            </Switch>
          </React.Fragment>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              ULACIT
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Desarrollo de aplicaciones de software
            </Typography>
            <br />
            <div align="center">
              <img
                height="150"
                width="400"
                src="http://globaledu.cr/wp-content/uploads/2015/07/ulacit.png"
                alt=""
              />
            </div>
            <br />
            <Copyright />
          </footer>
        </div>
      </main>
      </Router>
    </div>
  );
}
