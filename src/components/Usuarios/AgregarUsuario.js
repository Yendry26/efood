import React, { Component } from "react";
import MaterialTable from "material-table";

import axios from "axios";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

export default class Usuarios extends Component {
  state = {
    data: [],
    columns: []
  };

  //!POST Usuario
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET Usuario
  componentDidMount() {
    axios.get(`https://10.211.55.3:45455//api/Content/GetUsuario`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }

  deleteUsuario = async Usuario => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/DeleteUsuario/${Usuario.ID}`;
      await axios.delete(url);

      // Delete from UI
      let data = this.state.data;
      const index = data.indexOf(Usuario);
      data.splice(index, 1);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  updateUsuario = async (newUsuario, oldUsuario) => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/Content/PutUsuario/${oldUsuario.ID}`;
      await axios.put(url, newUsuario);

      // Update from UI
      const data = this.state.data;
      console.log(data);
      const index = data.indexOf(oldUsuario);
      data[index] = newUsuario;
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  addUsuario = async newUsuario => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PostUsuario/`;
      await axios.post(url, newUsuario);

      // Update from UI
      const data = this.state.data;
      data.push(newUsuario);
      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className=" w3-animate-zoom">
        <MaterialTable
          options={{
            padding: "dense"
          }}
          title="Lista de Usuarios"
          columns={[
          { title: "Rol", field: "ID_Rol", lookup:{ 1:'Administrativo', 2:'Seguridad', 3:'Mantenimiento', 4:'Consulta', 1002:'Usuario'}},
          { title: "ID", field: "ID", editable: "never" },
          { title: "Nombre", field: "Nombre" },
          { title: "Contrasena", field: "Contrasena", type:'hidden'},
          { title: "Correo", field: "Correo" , editable:'onAdd'  },
          { title: "Pregunta de Seguridad", field: "Pregunta_Seguridad", lookup:{ 'Equipo favorito':'Equipo favorito', 'Escuela Primaria':'Escuela Primaria', 'Primer Mascota':'Primera Mascota', 'test':'test'}},
          { title: "Respuesta de Seguridad", field: "Respuesta_Seguridad"},
          { title: "Estado", field:"Estado", lookup:{1:'Activo', 2:'Inactivo'}}

            
          ]}
          data={this.state.data}
          editable={{
            onRowAdd: newUsuario => this.addUsuario(newUsuario),

            onRowUpdate: (newUsuario, oldUsuario) =>
              this.updateUsuario(newUsuario, oldUsuario),

            onRowDelete: Usuario => this.deleteUsuario(Usuario)
          }}
        />
      </div>
    );
  }
}
