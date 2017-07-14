import React from "react";
var NavLink=require("react-router-dom").NavLink;

class Nav extends React.Component{
  render(){
    return(
      <div className="header">
      <h1 className="topLeftHeading">Weather App</h1>
      <ul className="Nav">
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>

        <li>
          <NavLink exact activeClassName="active" to="/current">Current</NavLink>
        </li>

        <li>
          <NavLink exact activeClassName="active" to="/weekly">Weekly</NavLink>
        </li>
      </ul>
      </div>
    );
  }
}

export default Nav;
