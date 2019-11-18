import React from "react";
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

export default class Tabla extends React.Component {
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
    axios.get(`https://localhost:44353/api/content/getusuario`).then(res => {
      this.setState({ personas: res.data });
      console.log(this.state.personas);
      const datos = JSON.stringify(this.state.personas);
      this.setState({ personas: datos });
    });
  }

  render() {
    return (
      <MaterialTable
        options={{
          search: false,
          sorting: false
        }}
        title="Custom Edit Component Preview"
        columns={[
          { title: "Nombre", field: "Nombre" },
          { title: "Correo", field: "Correo" },
          { title: "Estado", field: "Estado" },
          { title: "Birth Year", field: "birthYear", type: "datetime" },
          { lookup: { 34: "İstanbul", 63: "Şanlıurfa" } },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
          }
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