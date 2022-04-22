import React from 'react';



 const WeatherTab = ({weatherInfo}) => (
     
       
<div className='ui segment'  style = {{textAlign: "center" }}>
    
<div className="image">
    {weatherInfo.weather ?<img src={ `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png` }/> : null}
  </div>
  <a className='header'><h1>{weatherInfo.main ? <b >{weatherInfo.main.temp.toFixed() }°C</b>: null}</h1></a>
  <a><h3>{weatherInfo.main ? <b >Feels like: {weatherInfo.main.feels_like.toFixed() }°C</b>: null}</h3></a>
  <div className='content'>
    {weatherInfo.main ?<a className='header'>Location: {weatherInfo.name }</a> : null}
    <div>{weatherInfo.wind ?<a className='header'>Wind: {weatherInfo.wind.speed }KM/H</a> : null}</div>
    <div className="description">
      {weatherInfo.weather ? weatherInfo.weather[0].description : null }
    </div>
  </div>
  <div className="extra content">
 
  </div>
 
      <div className="ui centered cards" style = {{textAlign: "center"}}>
  <div className="card">
    <div className="content">
    <div className="image">
    {weatherInfo.weather ?<img src={ `https://img.icons8.com/officel/80/000000/hot.png` }/> : null}
  </div>
     {weatherInfo.main ? <div className="content">Max: {weatherInfo.main.temp_max.toFixed() }°C</div> : null}
    </div>
  </div>
  
  <div className="card">
    <div className="content">
    <div className="image">
    {weatherInfo.weather ?<img src={ `https://img.icons8.com/color/96/000000/cold.png` }/> : null}
  </div>
     {weatherInfo.main ? <div className="content">Min: {weatherInfo.main.temp_min.toFixed() }°C</div> : null}
    </div>
  </div>
</div>
</div>
)



export default WeatherTab;