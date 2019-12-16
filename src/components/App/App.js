import React, { useState } from "react";
import "./App.css";
import Headline from "./Headline";
import { ThemeProvider } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import Cliente from "../Cliente/Cliente";

import Login from "../Login/Login";

import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  const [rol, setRol] = useState(0);
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Login onRolChange={setRol} landingRol = {5}/>
            </ThemeProvider>
    </div>
  );
}

// const [greeting, setGreeting] = useState("Hello Function Component!");
// const handleChange = event => setGreeting(event.target.value);

// return (
//   <div>
//     <Headline headline={"Hola"} onChangeHeadline={handleChange} />
// 

//   </div>
// );
//}

export default App;
