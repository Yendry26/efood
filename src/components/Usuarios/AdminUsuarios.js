import React from "react";
import axios from "axios";

export default class AdminUsuarios extends React.Component {
  state = {
    personas: []
  };

  componentDidMount() {
    axios.get(`https://10.211.55.25:45455/getusuario`).then(
      res => {
        //console.log(res.data);
        this.setState({ personas: res.data });
      },
      error => {
        alert(error, "Sin conexion a la base de datos");
      }
    );
  }

  render() {
    return (
      <ul>
        {this.state.personas.map(persona => (
          <li key={persona.ID}>
            {persona.Nombre} {persona.Correo}
          </li>
        ))}
      </ul>
    );
  }
}
