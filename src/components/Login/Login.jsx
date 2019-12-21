import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { BrowserHistory } from "react-router";

//? Material imports
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

import swal from "sweetalert";

//? Component Imports
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

export default function Login({ landingRol, onRolChange, cliente, onClienteChange }) {
  const classes = useStyles();
  const [contrasena, setContrasena] = useState("");
  const [correo, setCorreo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  //const [greeting, setGreeting] = useState("Hello Function Component!");

  let buscarRolUsuario;
  let buscarCliente;
  //const [greeting, setGreeting] = useState("Hello Function Component!");
  const [rol, setRol] = useState(0);

  const handleRol = event => {
    event.preventDefault();
    setCuerpo(event.target.value);
  };

  const handleContrasena = event => {
    event.preventDefault();
    setContrasena(event.target.value);
  };

  const handleCorreo = event => {
    event.preventDefault();
    setCorreo(event.target.value);
  };

  const validarUsuario = event => {
    event.preventDefault();
    let expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var verifica = true;

    fetch("https://10.211.55.3:45455/api/content/GetUsuario")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //! Busca el usuario y la contrasena

        if (!correo) {
          swal("Correo es requerido", "Complete todos los campos", "warning");
          verifica = false;
        } else if (!expRegEmail.exec(correo)) {
          swal(
            "Formato de correo inválido",
            "Complete todos los campos para continuar",
            "warning"
          );
          verifica = false;
        } else if (!contrasena) {
          swal(
            "Contraseña es requerido",
            "Complete todos los campos",
            "warning"
          );
          verifica = false;
        } else {
          verifica = true;
          try {
            const buscar = data.find(
              usuario =>
                usuario.Correo === correo && usuario.Contrasena === contrasena
            );
            buscarRolUsuario = buscar.ID_Rol;
            buscarCliente = buscar.Nombre;
            setRol(buscar.ID_Rol);
          } catch (error) {}

          if (verifica === true && buscarRolUsuario !== undefined) {
            console.log(`El rol encontrado es ${buscarRolUsuario}`);
            console.log(`El rol encontrado es ${buscarCliente}`);

            onRolChange(buscarRolUsuario);
            onClienteChange (buscarCliente);
          } else {
            swal(
              "Usuario o contraseña incorrecto",
              "Complete todos los campos",
              "error"
            );
          }
        }
      })
      .catch(()=> swal(
        "No se pudo conectar al servidor",
        "API no está corriendo",
        "error"
      ))
  };

  const cambioCuerpo = landingRol => {
    if (
      landingRol === 1 ||
      landingRol === 2 ||
      landingRol === 3 ||
      landingRol === 4 ||
      landingRol === 1002
    ) {
      return (
        <div>
          <NavBar usuarioRol={landingRol} cliente = {cliente} />
        </div>
      );
    } else if (landingRol === 0) {
      return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo"
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
                  label="Contraseña"
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
       
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <div className=" w3-animate-zoom">
      <div>{cambioCuerpo(landingRol)}</div>
    </div>
  );
}
