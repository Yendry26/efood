import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import Productos from "../Administracion/Productos";

export default class MediaCard extends Component {
  state = {
    productos: []
  };

  componentDidMount() {
    this.getProductos();
  }

  async getProductos() {
    const res = await Axios.get(
      "https://10.211.55.3:45455/api/content/GetProducto"
    );
    console.log(res.data);
    this.setState({ productos: res.data });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.productos.map(producto => (
            <div className="card">
              <img src={producto.Foto} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{producto.Nombre}</h5>
                <p className="card-text">{producto.Descripcion}</p>
                <a className="btn btn-primary">Purchase</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
