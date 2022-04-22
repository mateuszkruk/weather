
import SearchBar from "./SearchBar";
import axios from "axios";
import Weather from './Weather';
import NextFour from './NextFour'
import React, { useEffect, useState } from "react";
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data : {},
        nextData : {},
        
      } 
      };
    
      
    
    onSearchSubmit = (term) => {
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
         {
            
        }).then(result => {
            this.setState({ data: result.data })
            console.log(this.state.data);
            
           return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.data.coord.lat}&lon=${this.state.data.coord.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
           
        }).then(result => {
            this.setState({nextData: result.data})
            console.log(this.state.nextData)
        }
        )
    } 
    
    
    
    render(){
    return( 
    <div className="ui container">
       
        <SearchBar onSearchSubmit ={this.onSearchSubmit}/>
     

      
        <Weather weatherInfo = {this.state.data}/>
       
        <NextFour nextWeatherInfo = {this.state.nextData} />
        
        
    </div>
    
    )
}
}
export default App;
