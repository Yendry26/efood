import React from "react";
import "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../Login/SignInSide";
import SignInSide from "../Login/SignInSide";
import SignUp from "../Login/SignUp";
import NavBar from "../NavBar/NavBar";
import AdminUsuarios from "../Usuarios/AdminUsuarios";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SignInSide} />
          <Route path="/login" exact component={SignInSide} />
          <Route path="/registro" exact component={SignUp} />
          <Route path="/admin" exact component={AdminUsuarios} />
          <Route path="/nav" exact component={NavBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
