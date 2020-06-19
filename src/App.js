import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
}

export default App;
