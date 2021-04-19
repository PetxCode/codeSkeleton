import React from "react";
import Binder from "./Binder/Binder";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Notification from "./component/Notification";
import Chat from "./component/Chat";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Binder} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/notify" exact component={Notification} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
