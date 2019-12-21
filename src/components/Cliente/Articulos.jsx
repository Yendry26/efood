import React from "react";
import MaterialTable from "material-table";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import swal from "sweetalert";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
      borderRadius: "60px"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    },
    tabla: {
      borderRadius: "60px",
      boxShadow: "0px 0px 48px 16px rgba(0,0,0,0.35)"
    }
  }
});

function  deleteCarrito () {
  const response =  fetch(
    `https://10.211.55.3:45455/api/content/DeleteCarrito`
  )
    .then(res => res.json())
    .then(data => {
      //! Busca el usuario y la contrasena
      swal(
        "Carrito limpio",
        "API no está corriendo",
        "warning"
      )
    })
    .catch(() =>
      swal(
        "No se pudo conectar al servidor",
        "API no está corriendo",
        "error"
      )
    );
};

export default class Articulos extends React.Component {
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
    axios.get(`https://10.211.55.3:45455/api/content/GetCarrito`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }

  deleteProduct = async producto => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455/api/content/DeleteCarrito/${producto.ID_Producto}`;
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
      const url = `https://10.211.55.3:45455/api/content/PutCarrito/${oldProduct.ID_Producto}`;
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




  render() {
    return (
      <div className=" w3-animate-zoom">
        <Tooltip title="Limpiar Carrito">
          <IconButton onClick={()=>deleteCarrito()} color="secondary" aria-label="delete">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <MaterialTable
          title={""}
          options={{
            padding: "dense"
          }}
          columns={[
            { title: "Nombre", field: "Descripcion" },
            { title: "Descripcion", field: "Descripcion" },
            { title: "Cantidad", field: "Cantidad", type: "numeric" },
            { title: "Precio", field: "Precio" }
          ]}
          data={this.state.data}
          editable={{
            onRowUpdate: (newProduct, oldProduct) =>
              this.updateProduct(newProduct, oldProduct),
            onRowDelete: producto => this.deleteProduct(producto)
          }}
        />
      </div>
    );
  }
}
