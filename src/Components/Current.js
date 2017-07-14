import React from 'react';
import axios from "axios";

class Current extends React.Component{
  render()
  {
    return(
      <div className="Current">
        <div className="inputContainer">
        <input type="text" className="textBox" placeholder="Enter name of the city"></input>
        <button className="button" onClick = {() => this.getUrlResponse()}>Get Weather</button>
        </div>
      </div>
    );
  }

  getUrlResponse(){
    var city_name = document.getElementById("textBox").value;
    this.addIntoList(city_name);
    this.clearText();
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+city_name+"&type=accurate&APPID=81520cb0876531317b11fbb6b2513f33&cnt=5";

    axios.get(url)
  .then(function (response) {
    console.log(response);
    _self.getWeatherForecastDetails(response);

    .catch(function (error) {
    return(error);
  });
  
  }

  addIntoList(city_name){

  }

}

export default Current;
