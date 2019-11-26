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

export default class ProcesadorPago extends React.Component {
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
      .get(`https://10.211.55.25:45455/api/content/GetProcesadorPago`)
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
        title="Procesadores de Pago"
        columns={[
          {
            title: "ID_Procesador_Pago",
            field: "ID_Procesador_Pago",
            editable: "never"
          },
          { title: "ID_Usuario", field: "ID_Usuario" },
          { title: "Nombre", field: "Nombre" },
          { title: "Tipo", field: "Tipo" },
          { title: "Estado", field: "Estado" },
          { title: "Procesador", field: "Procesador" }
          // { title: "ID_Tipo", field: "ID_Tipo" }
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
