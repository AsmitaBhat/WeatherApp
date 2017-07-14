import React from 'react';
var Link = require("react-router-dom").Link;

class Home extends React.Component{
  render(){
    return(
      <div className="Home">
        <h1 className="homeHeading">Get the weather information of your city Now..!</h1>
        <Link className="button" to="/current">Get Weather</Link>
      </div>
    );
  }
}

export default Home;
