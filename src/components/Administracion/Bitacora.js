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
    data: [],
    columns: []
  };

  //!POST Producto
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET Producto
  componentDidMount() {
    axios.get(`https://10.211.55.3:45455//api/content/GetBitacora`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }

  deleteProduct = async bitacora => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/DeleteBitacora/${bitacora.ID}`;
      await axios.delete(url);

      // Delete from UI
      let data = this.state.data;
      const index = data.indexOf(bitacora);
      data.splice(index, 1);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (newBitacora, oldBitacora) => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PutBitacora/${oldBitacora.ID_Producto}`;
      await axios.put(url, newBitacora);

      // Update from UI
      const data = this.state.data;
      console.log(data);
      const index = data.indexOf(oldBitacora);
      data[index] = newBitacora;
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  addProduct = async newBitacora => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PostBitacora/`;
      await axios.post(url, newBitacora);

      // Update from UI
      const data = this.state.data;
      data.push(newBitacora);
      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

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
        data={this.state.data}
        editable={{
            onRowAdd: newBitacora => this.addBitacora(newBitacora),

            onRowUpdate: (newBitacora, oldBitacora) =>
              this.updateUsuario(newBitacora, oldBitacora),

            onRowDelete: Bitacora => this.deleteBitacora(Bitacora)
        }}
      />
    );
  }
}
