// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Cards from "./Cards";
import style from "./Cliente.css";

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
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    borderRadius: "25px",
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  st: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    borderRadius: "25px"
  },
  searchField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 100
  },
  searchButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 100,
    height: 50,
    width: 250
  },
  searchBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    background: "#689C56",
    borderRadius: "60px"
  },
  searchForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#689C56",
    borderRadius: "100px",
    padding: theme.spacing(4, 0, 4),
    boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginRight: theme.spacing(2)
  }
}));

export default function Search() {
  const [producto, setProducto] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getProductos();
  }, [query]);

  const getProductos = async () => {
    const response = await fetch(
      `https://10.211.55.3:45455/api/Content/BuscarProducto/${query}`
    )
      .then(res => res.json())
      .then(data => {
        //! Busca el usuario y la contrasena
        console.log("Encontramos", data);
        if (data.length === 0) {
          postError();
          swal(
            `No se encontró nigun producto con la palabra:  ${query}`,
            "Intente de nuevo",
            "warning"
          );
        } else {
          setProducto(data);
        }
      })
      .catch(() => swal("Error", "No se pudo encontrar producto", "error"));
  };

  const postError = async () => {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = mm + "-" + dd + "-" + yyyy;

    today = dd + "/" + mm + "/" + yyyy;
    console.log(today);

    const data = {
      Fecha_Hora: today,
      Mensaje: `Producto no encontrado ${query}`
    };
    fetch(`https://10.211.55.3:45455/api/Content/PostError`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const returnCard = () => {
    try {
      return (
        <Grid container className={classes.root} spacing={2}>
          {producto.map(producto => (
            <Grid item xs={6} sm={6} md={4}>
              <Cards
                avatar={producto.Nombre[0]}
                titulo={producto.Nombre}
                descripcion={producto.Descripcion}
                foto={"https://source.unsplash.com/random?fastfood"}
                ingredientes={producto.Ingredientes}
                precio={producto.Precio}
                key={producto.ID_Producto}
              />
            </Grid>
          ))}
          <br />
        </Grid>
      );
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={" w3-animate-zoom "}>
        <CssBaseline />
        <form className={classes.searchForm} onSubmit={getSearch}>
          <div
            className="container-fluid w3-border-red  col-xs-1"
            align="center"
          >
            <div
              className="container-fluid w3-border-red col-xs-1"
              align="center"
            >
              <TextField
                className={classes.searchField}
                onChange={updateSearch}
                id="outlined-basic"
                variant="filled"
              />
            </div>
            <br />
            <div
              className="container-fluid w3-border-red w3-animate-zoom col-xs-1"
              align="center"
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                className={classes.searchButton}
                startIcon={<SearchIcon />}
              >
                Buscar
              </Button>
            </div>
          </div>
        </form>

        <br />
        <br />
        <br />
        {returnCard()}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
