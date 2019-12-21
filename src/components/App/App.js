import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.min.css";


import Login from "../Login/Login";

import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  const [rol, setRol] = useState(0);
  const [cliente, setCliente ] = useState('')
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Login onRolChange={setRol} landingRol={1} cliente={cliente} onClienteChange = {setCliente} />
      </ThemeProvider>
    </div>
  );
}
export default App;
