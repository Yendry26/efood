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

export default class Pedido extends React.Component {

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
    axios.get(`https://10.211.55.3:45455//api/content/GetPedidos`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }

  deleteProduct = async Pedido => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/DeletePedidos/${Pedido.ID_Pedido}`;
      await axios.delete(url);

      // Delete from UI
      let data = this.state.data;
      const index = data.indexOf(Pedido);
      data.splice(index, 1);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (newPedido, oldPedido) => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PutBitacora/${oldPedido.ID_Pedido}`;
      await axios.put(url, newPedido);

      // Update from UI
      const data = this.state.data;
      console.log(data);
      const index = data.indexOf(oldPedido);
      data[index] = newPedido;
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  addProduct = async newPedido => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PostBitacora/`;
      await axios.post(url, newPedido);

      // Update from UI
      const data = this.state.data;
      data.push(newPedido);
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
        title="Pedido"
        columns={[
          { title: "ID_Pedido", field: "ID_Pedido", editable: "never" },
          { title: "ID_Usuario", field: "ID_Usuario" },
          { title: "ID_Codigo", field: "ID_Codigo" },
          { title: "Estado", field: "Estado" },
          { title: "Monto", field: "Monto" }
        ]}
        data={this.state.data}
        editable={{
            onRowAdd: newPedido => this.addBitacora(newPedido),

            onRowUpdate: (newPedido, oldPedido) =>
              this.updateUsuario(newPedido, oldPedido),

            onRowDelete: Pedido => this.DeletePedidos(Pedido)
        }}
      />
    );
  }
}
