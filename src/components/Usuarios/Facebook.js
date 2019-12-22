import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import HomeCliente from "../Cliente/HomeCliente";
import Login from "../Login/Login";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import App from '../App/App'
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  componentClicked = e => console.log("Clicke");
  ;

  addUser = async newUser => {
    try {
      newUser = {
        ID_Rol: 1002,
        Nombre: this.state.name,
        Contrasena: "123",
        Correo: this.state.email,
        Pregunta_Seguridad: "usuario de facebook",
        Respuesta_Seguridad: "usuario de facebook",
        Estado: "Activo"
      };

      const url = `https://10.211.55.3:45455/api/content/PostUsuario/`;
      await axios.post(url, newUser);
      // Update from UI
      const data = this.state.name;
      data.push(newUser);
      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  responseFacebook = response => {
    // console.log(response);
    try {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
      this.addUser();
    } catch (error) {}
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
      return ReactDOM.render(
        <ThemeProvider theme={theme}>
          <HomeCliente cliente={this.state.name} />
        </ThemeProvider>,
        document.getElementById("root")
      );
    } else {
      fbContent = (
        <div>
          <FacebookLogin
            appId="2579819522247896"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
        
      );
      
    }
    console.log(this.state.name);

    return <div>{fbContent}</div>;
  }
}