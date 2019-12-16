import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App/App";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SeguridadNav from "../NavBar/SegurdidadNav";

import NavBar from "../NavBar/NavBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Ulacit 2019
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random?brunch)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// function x (){
//   location.replace("http://localhost:3000/Consecutivos");

// }

export default function ValidarLogin({ landingRol }) {
  const classes = useStyles();
  const [contrasena, setContrasena] = useState("");
  const [correo, setCorreo] = useState("");
  //const [greeting, setGreeting] = useState("Hello Function Component!");
  const [rol, setRol] = useState(0);
  //const handleChange = event => setGreeting(event.target.value);

  let buscarRolUsuario;

  const handleContrasena = event => {
    event.preventDefault();
    setContrasena(event.target.value);
  };

  const handleCorreo = event => {
    event.preventDefault();
    setCorreo(event.target.value);
  };

  //! Valida si usuario y Rol exisiten
  const validarUsuario = event => {
    let usuarioExiste = false;
    event.preventDefault();

    fetch("https://10.211.55.3:45455/api/content/GetUsuario")
      .then(res => res.json())
      .then(data => {
        //! Busca el usuario y la contrasena
        while (usuarioExiste === false) {
          const buscar = data.find(
            usuario =>
              usuario.Correo === correo && usuario.Contrasena === contrasena
          );
          try {
            buscarRolUsuario = buscar.ID_Rol;
            setRol(buscarRolUsuario);
            console.log(`El rol encontrado es ${buscarRolUsuario}`);
            usuarioExiste = true;
            if (usuarioExiste === true) {
              console.log(rol, "aqui");
            }
          } catch (error) {
            // alert("Usuario o contraseña incorrectos");
            setCorreo("");
            setContrasena("");
            usuarioExiste = false;
          }
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciá Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={correo}
              onChange={handleCorreo}
              color="primary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={contrasena}
              onChange={handleContrasena}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validarUsuario}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link className={classes.style} href="#" variant="body2">
                  {"No tenés una cuenta? Registrate aquí"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
