import React, { useEffect } from "react";

import AdminNav from "../NavBar/AdminNav";
import SeguridadNav from "../NavBar/SegurdidadNav";
import MantenimientoNav from "./MantenimientoNav";
import ConsultaNav from "../NavBar/ConsultaNav";

import Content from "../Usuarios/Content";
import HomeCliente from "../Cliente/HomeCliente";

export default function NavBar({ usuarioRol }) {
  // const handleChange = event => setGreeting(event.target.value);
  // const [usuarioRol, setUsuarioRol] = useState("Hello Function Component!");
  console.log("Entrando al NAV rol= ", usuarioRol);

  const cambioRol = usuarioRol => {
    if (usuarioRol === 1) {
      return (
        <div>
          <AdminNav />
        </div>
      );
    } else if (usuarioRol === 2) {
      return (
        <div>
          <SeguridadNav />
        </div>
      );
    } else if (usuarioRol === 3) {
      return (
        <div>
          <MantenimientoNav />
        </div>
      );
    } else if (usuarioRol === 4) {
      return (
        <div>
          <ConsultaNav />
        </div>
      );
    } else if (usuarioRol === 5) {
      return (
        <div>
          <HomeCliente />
        </div>
      );
    }
  };
  return (
    <div>
      <div className="w3-animate-top">{cambioRol(usuarioRol)}</div>
    </div>
  );
}

/*
!! admin
!! seguridad 
!! mantenimiento 
!! consulta
className="col-md-12 col-sm-12 col-xs-12 text-center pt-5"
*/
