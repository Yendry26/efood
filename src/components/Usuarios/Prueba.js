import React from "react";
import axios from "axios";

axios
  .post(
    "https://localhost:44353/api/content/postusuario",

    {
      Rol: "2",
      Nombre: "Prueba",
      Contrasena: "Prueba",
      Correo: "Prueba@Prueba.com",
      Pregunta_Seguridad: "Pregunta_Seguridad",
      Respuesta_Seguridad: "Respuesta_Seguridad",
      Estado: "Activo"
    }
  )
  .then(
    response => {
      console.log(response, "the response");
    },
    error => {
      console.log(error, "The errosdasr");
    }
  );

export default class PersonList extends React.Component {
  render() {
    return <div>Hola</div>;
  }
}
