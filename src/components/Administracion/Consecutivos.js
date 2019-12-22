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

export default class Consecutivos extends Component {
  state = {
    data: [],
    columns: []
  };

  //!POST Consecutivo
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  //! GET Consecutivo
  componentDidMount() {
    axios.get(`https://10.211.55.3:45455//api/Content/GetConsecutivo`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data, "GET from  DB");
    });
  }
  updateConsecutivo = async (newConsecutivo, oldConsecutivo) => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/Content/PutConsecutivo/${oldConsecutivo.ID_Consecutivo}`;
      await axios.put(url, newConsecutivo);

      // Update from UI
      const data = this.state.data;
      console.log(data);
      const index = data.indexOf(oldConsecutivo);
      data[index] = newConsecutivo;
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  addConsecutivo = async newConsecutivo => {
    try {
      // Delete from server
      const url = `https://10.211.55.3:45455//api/content/PostConsecutivo/`;
      await axios.post(url, newConsecutivo);

      // Update from UI
      const data = this.state.data;
      data.push(newConsecutivo);
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
          title="Lista de Consecutivos"
          columns={[
          { title: "Consecutivo", field: "Consecutivo_num", editable:"onAdd"},
          { title: "Descripcion", field: "Descripcion", editable: "onAdd" },
          { title: "ID Consecutivo", field: "ID_Consecutivo", editable:'never'},
          { title: "Prefijo", field: "Prefijo", type:'hidden'},
                    ]}
          data={this.state.data}
          editable={{
            onRowAdd: newUsuario => this.addConsecutivo(newUsuario),

            onRowUpdate: (newUsuario, oldUsuario) =>
              this.updateConsecutivo(newUsuario, oldUsuario),
          }}
        />
      </div>
    );
  }
}
