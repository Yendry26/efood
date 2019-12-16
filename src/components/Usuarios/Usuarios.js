import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import axios from "axios";

const useStyles = makeStyles({
root : {
  width: "100%",
overflowX: "auto"
},
table: {
minWidth: 650
}
});

export default function Animal() {
const classes = useStyles();
const [nombre, setNombre] = React.useState("");
const [peso, setPeso] = React.useState("");
const [raza, setRaza] = React.useState("");
const [edad, setEdad] = React.useState("");
const [dueno, setDueno] = React.useState("");
const [enfermedad, setEnfermedad] = React.useState("");
const [animales, setAnimales] = React.useState([{}]);
let ingreso;
const handleNombre = event => {
event.preventDefault();
setNombre(event.target.value);
};

const handlePeso = event => {
event.preventDefault();
setPeso(event.target.value);
};

const handleRaza = event => {
event.preventDefault();
setRaza(event.target.value);
};

const handleEdad = event => {
event.preventDefault();
setEdad(event.target.value);
};

const handleDueno = event => {
event.preventDefault();
setDueno(event.target.value);
};

const handleEnfermedad = event => {
event.preventDefault();
setEnfermedad(event.target.value);
};


function addItemToCart(e) {
var verifica = true;

if (!nombre) {
  swal("Nombre es requerido", "Complete todos los campos", "warning");
  verifica = false;
} else if (!peso) {
  swal("Peso es requerido", "Complete todos los campos", "warning");
  verifica = false;
} else if (!raza) {
  swal("Raza es requerido", "Complete todos los campos", "warning");
  verifica = false;
} else if (!edad) {
  swal("Edad es requerido", "Complete todos los campos", "warning");
  verifica = false;
} else if (!dueno) {
  swal("Dueño es requerido", "Complete todos los campos", "warning");
  verifica = false;
} else if (!enfermedad) {
  swal("Enfermedad es requerido", "Complete todos los campos", "warning");
  verifica = false;
}
var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = d.getFullYear();
 
ingreso = date + "/" + month + "/" + year;

if (verifica) {
  const item = { nombre, peso, raza, edad, dueno, enfermedad, ingreso };

  console.log(item);
  setAnimales(animal => [...animal, item]);
}


}

return (
<div>
  <h1 className=" w3-container w3-center w3-animate-zoom">
    {" "}
    Ingresá datos de la mascota
  </h1>
  <div className=" w3-container w3-center w3-animate-top">
    <section className="container w3-container w3-center w3-animate-top">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="nombre"
              label="Nombre"
              value={nombre}
              onChange={handleNombre}
            />
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="peso"
              label="Peso"
              value={peso}
              onChange={handlePeso}
            />
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="raza"
              label="Raza"
              value={raza}
              onChange={handleRaza}
            />
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="edad"
              label="Edad"
              value={edad}
              onChange={handleEdad}
            />
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="dueno"
              label="Dueño"
              value={dueno}
              onChange={handleDueno}
            />
          </form>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className="text-align-center"
              id="enfermedad"
              label="Enfermedad"
              value={enfermedad}
              onChange={handleEnfermedad}
            />
          </form>
        </div>
      </div>
    </section>
    <div className="col-sm-12 col-xs-12 text-center pt-5">
      <Button variant="contained" color="primary" onClick={addItemToCart}>
        Agregar
      </Button>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="col-xs-12 col-md-12">
      <Paper className={classes.root}>
        <div className="col-sm-12 col-xs-12 text-center"></div>
        <div>
          <MaterialTable
            components={{
              Toolbar: props => (
                <div
                  style={{
                    backgroundColor: "#3f51b5",
                    textAlign: "center"
                  }}
                >
                  <MTableToolbar {...props} />
                </div>
              )
            }}
            options={{
              search: false
            }}
            title="Mascotas"
            text="center"
            columns={[
              { title: "Nombre", field: "Nombre" },
              { title: "Correo", field: "Correo", editable: "never" },
              { title: "Estado", field: "Estado" },
              { title: "Rol", field: "ID_Rol" }
            ]}
            data={animales}
          />
        </div>
      </Paper>
    </div>
  </div>
</div>
);
}















/*

export default class Usuarios extends React.Component {
  state = {
    personas: [],
    columns: [],
    Nombre: "", //!POST USER
    ID_Rol: "" //!POST USER
  };

  //!POST User
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET User
   componentDidMount() {
    axios.get(`https://10.211.55.3:45455/api/content/GetUsuario`).then(res => {
      this.setState({ personas: res.data });
      console.log(this.state.personas, "GET from  DB");
      const datos = JSON.stringify(this.state.personas);
       this.setState( { personas: datos });
    });
  }

  render() {
    return (
      
      <MaterialTable
        options={{
          search: false,
          sorting: false,
          paging: false,
          export: true,
          padding: "dense"
        }}
        title="Lista de usuarios"
        columns={[
          { title: "Nombre", field: "Nombre" },
          { title: "Correo", field: "Correo", editable: "never" },
          { title: "Estado", field: "Estado" },
          { title: "Rol", field: "ID_Rol" }
        ]}
        data={this.state.personas}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}
*/


