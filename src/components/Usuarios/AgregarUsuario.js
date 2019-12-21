import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import MaterialTable from "material-table";
import axios from "axios";
import swal from "sweetalert";



const roles = [
  {
    value: 1,
    label: "Administrador"
  },
  {
    value: 2,
    label: "Seguridad"
  },
  {
    value: 3,
    label: "Mantenimiento"
  },
  {
    value: 4,
    label: "Consulta"
  }
];

const preguntas = [
  {
    value: "Nombre de primer mascota",
    label: "Nombre de primer mascota"
  },
  {
    value: "Equipo favorito",
    label: "Equipo favorito"
  },
  {
    value: "Lugar de vacaciones el año pasado",
    label: "Lugar de vacaciones el año pasado"
  }
];

const estados = [
  {
    value: 1,
    label: "Activo"
  },
  {
    value: 2,
    label: "Inactivo"
  }
];
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  menu: {
    width: 600
  }
}));



export default function AgregarUsuario() {
  let datos = {};
  const classes = useStyles();
  const [rol, setRol] = useState(0);
  const [estado, setEstado] = useState("");
  const [preguntaSeguridad, setPreguntaSeguridad] = useState("");
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correo, setCorreo] = useState("");
  const [respuestaSecreta, setRespuestaSecreta] = useState("");
  const [usuarios, setUsuarios] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
     getUsuarios();
  }, []);

  // const getUsuarios = async () => {
  //   setIsLoading(true)
  //   try {
  //     const res = await axios
  //     .get(`https://10.211.55.3:45455:44353/api/content/GetUsuario`)
  //     setUsuarios(res.data)
  //     console.log(res.data);
      
  //   } catch {

  //   } finally {      
  //     setIsLoading(false)
  //   }
  // }

  const getUsuarios = async () => {
    const response = await fetch(
      `https://10.211.55.3:45455/api/content/GetUsuario`
    )
      .then(res => res.json())
      .then(data => {
        //! Busca el usuario y la contrasena
        console.log(data);
        setUsuarios(data);
      })
      .catch(() =>
       swal(
          "No se pudo conectar al servidor",
          "API no está corriendo",
          "error"
        )
      );
      setIsLoading(false)
  };



  
  //! Inputs
  const handleNombre = event => {
    setNombre(event.target.value);
  };

  const handleContrasena = event => {
    setContrasena(event.target.value);
  };

  const handleCorreo = event => {
    setCorreo(event.target.value);
  };

  const handleRespuestaSecreta = event => {
    setRespuestaSecreta(event.target.value);
  };

  const handleChange = event => {
    event.preventDefault();

    setRol(event.target.value);
  };
  const handleChangeE = event => {
    event.preventDefault();

    setEstado(event.target.value);
  };
  const handleChangeP = event => {
    event.preventDefault();
    setPreguntaSeguridad(event.target.value);
  };

  //! Guardar
  const guardar = async event => {
    event.preventDefault();
    setIsLoading(true)
    try {
      datos = {
        ID_Rol: rol,
        Nombre: nombre,
        Contrasena: contrasena,
        Correo: correo.toLocaleLowerCase(),
        Pregunta_Seguridad: preguntaSeguridad,
        Respuesta_Seguridad: respuestaSecreta,
        Estado: estado
      };
  
      await axios
      .post('https://10.211.55.3:45455:44353/api/Content/PostUsuario', datos)
      
      await getUsuarios()
    } finally {
      setIsLoading(false)
      console.log(datos);
      
    }
  };
  console.log(datos);

  return (
    <div className="">
    <form className={classes.container} noValidate autoComplete="off">
      <h1>Creacion de usuarios</h1>
      <div>
        <div>
          <TextField
            id="Nombre"
            className={classes.textField}
            label="Nombre Completo"
            margin="normal"
            value={nombre}
            onChange={handleNombre}
          />
          <TextField
            id="Contraseña"
            label="Contraseña"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={contrasena}
            onChange={handleContrasena}
          />

          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Correo"
            margin="normal"
            value={correo}
            onChange={handleCorreo}
          />
        </div>
        <TextField
          id="standard-select-question"
          select
          className={classes.textField}
          value={preguntaSeguridad}
          onChange={handleChangeP}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Pregunta de seguridad"
          margin="normal"
        >
          {preguntas.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="Respuesta_Seguridad"
          className={classes.textField}
          label="Respuesta de seguridad"
          margin="normal"
          value={respuestaSecreta}
          onChange={handleRespuestaSecreta}
        />
        <TextField
          id="standard-select-rol"
          select
          className={classes.textField}
          value={rol}
          onChange={handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Seleccioná un rol"
          margin="normal"
        >
          {roles.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-status"
          select
          className={classes.textField}
          value={estado}
          onChange={handleChangeE}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Estado"
          margin="normal"
        >
          {estados.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={guardar}
            disabled={isLoading}
          >
            Guardar
          </Button>
        </div>
      </div>
    </form>  
    <MaterialTable
        isLoading={isLoading}
        options={{
          search: false,
          sorting: false,
          paging: false,
          export: true,
          padding: "dense"
        }}
        title="Lista de Productos"
        columns={[
          { title: "ID", field: "ID", editable: "never" },
          { title: "Nombre", field: "Nombre" },
          { title: "Contrasena", field: ""},
          { title: "Correo", field: "Correo" , editable: "never"  }
        ]}
        data={usuarios}
        editable={{
          onRowUpdate: (newProduct, oldProduct) => (
            this.updateProduct(newProduct, oldProduct)
          ),
          onRowDelete: producto => (
            this.deleteProduct(producto)
          )
        }}
      />
    </div>
  );
}
