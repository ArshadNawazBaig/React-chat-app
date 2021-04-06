import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/welcome/Index";
import Chat from "./components/chat/Index";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
  <Router>
    <Route path="/" exact component={Welcome}></Route>
    <Route path="/chat" exact component={Chat}></Route>
  </Router>
);

export default App;
