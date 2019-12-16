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

export default class Bitacora extends React.Component {
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
    axios
      .get(`https://10.211.55.3:45455/api/content/GetBitacora`)
      .then(res => {
        this.setState({ personas: res.data });
        console.log(this.state.personas, "GET from  DB");
        const datos = JSON.stringify(this.state.personas);
        this.setState({ personas: datos });
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
        title="Bitacora"
        columns={[
          { title: "ID_Bitacora", field: "ID_Bitacora", editable: "never" },
          { title: "ID_Pedido", field: "ID_Pedido" },
          //{ title: "ID_Usuario", field: "ID_Usuario" }, !! Falta en SP
          { title: "Fecha_Hora", field: "Fecha_Hora" },
          { title: "Accion", field: "Accion" }
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
