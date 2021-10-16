import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from "./components/Login";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import auth from "./components/Auth";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/content" exact component={Content} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
