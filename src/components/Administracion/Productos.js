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

export default class Productos extends React.Component {
  state = {
    data: [],
    columns: [],
    Nombre: "", //!POST USER
    ID_Rol: "" //!POST USER
  };

  //!POST Producto
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET Producto
  componentDidMount() {
    axios
      .get(`https://localhost:44353//api/content/GetProducto`)
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data, "GET from  DB");
      });
  }

  deleteProduct = async (producto) => {
    try {
      // Delete from server
      const url = `https://localhost:44353/api/content/DeleteProducto/${producto.ID_Producto}`
      await axios.delete(url)
      
      // Delete from UI
      let data = this.state.data;
      const index = data.indexOf(producto);
      data.splice(index, 1);
      this.setState({ data });

    } catch (error) {
      console.error(error)
    }
  }

  updateProduct = async (newProduct, oldProduct) => {
    try {
      // Delete from server
      const url = `https://localhost:44353/api/content/PutProducto/${oldProduct.ID_Producto}`
      await axios.put(url, newProduct)
      
      // Update from UI
      const data = this.state.data;
      console.log(data)
      const index = data.indexOf(oldProduct);
      data[index] = newProduct;
      this.setState({ data });

    } catch (error) {
      console.error(error)
    }
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
        title="Lista de Productos"
        columns={[
          { title: "ID_Producto", field: "ID_Producto", editable: "never" },
          { title: "ID_Tipo_Precio", field: "ID_Tipo_Precio" },
          { title: "Nombre", field: "Nombre" },
          { title: "Descripcion", field: "Descripcion" },
          { title: "Foto", field: "Foto" }
        ]}
        data={this.state.data}
        editable={{
          onRowUpdate: (newProduct, oldProduct) => (
            this.updateProduct(newProduct, oldProduct)
          ),
          onRowDelete: producto => (
            this.deleteProduct(producto)
          )
        }}
      />
    );
  }
}
