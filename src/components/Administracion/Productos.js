import React from "react";
import MaterialTable from "material-table";
import Tooltip from "@material-ui/core/Tooltip";

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
    columns: []
  };

  //!POST Producto
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET Producto
  componentDidMount() {
    axios.get(`https://10.211.55.3:45455/api/content/GetProducto`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }

  deleteProduct = async producto => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455/api/content/DeleteProducto/${producto.ID_Producto}`;
      await axios.delete(url);

      // Delete from UI
      let data = this.state.data;
      const index = data.indexOf(producto);
      data.splice(index, 1);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (newProduct, oldProduct) => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455/api/content/PutProducto/${oldProduct.ID_Producto}`;
      await axios.put(url, newProduct);

      // Update from UI
      const data = this.state.data;
      console.log(data);
      const index = data.indexOf(oldProduct);
      data[index] = newProduct;
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  addProduct = async newProduct => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455/api/content/PostProducto/`;
      await axios.post(url, newProduct);

      // Update from UI
      const data = this.state.data;
      data.push(newProduct);
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
          title="Lista de Productos"
          columns={[
            { title: "ID Producto", field: "ID_Producto", editable: "never" },
            { title: "Tipo Precio", field: "ID_Tipo_Precio" },
            { title: "Nombre", field: "Nombre" },
            { title: "Descripcion", field: "Descripcion" },
            { title: "Ingredientes", field: "Ingredientes" },
            { title: "ID_Consecutivo", field: "ID_Consecutivo" },
            { title: "Foto", field: "Foto" },
            
          ]}
          data={this.state.data}
          editable={{
            onRowAdd: newProduct => this.addProduct(newProduct),

            onRowUpdate: (newProduct, oldProduct) =>
              this.updateProduct(newProduct, oldProduct),

            onRowDelete: producto => this.deleteProduct(producto)
          }}
        />
      </div>
    );
  }
}
