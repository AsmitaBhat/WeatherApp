import React from 'react';
import Home from "./Components/Home.js";
import Current from "./Components/Current.js";
import Weekly from "./Components/Weekly.js";
import {Router,Route,Switch} from "react-router-dom";
import Nav from "./Components/Nav.js";
import createHashHistory from "history/createHashHistory";


class App extends React.Component {
  render() {
    const history = createHashHistory();
    return (
      <Router history={history}>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/current" component={Current} />
          <Route path="/weekly" component={Weekly}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
