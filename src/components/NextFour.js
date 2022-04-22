import React from 'react';



 const WeatherTab = ({nextWeatherInfo}) => (
    <div className="ui centered cards" style = {{textAlign: "center"}}>
    <div className="card" >
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 1</div> : null}</div>
      <div className="image" >
      <div >{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[0].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content"> {nextWeatherInfo.daily[0].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 2</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[1].weather[0].icon}@2x.png` } /> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[1].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 3</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[2].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[2].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 4</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[3].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[3].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 5</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[4].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[4].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 6</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[5].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[5].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 7</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[6].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[6].temp.day.toFixed() }°C</div> : null}</div>
      </div>
      <div className="card">
        <div>{nextWeatherInfo.daily ? <div className="content">Next day : 8</div> : null}</div>
      <div className="image">
      <div>{nextWeatherInfo.daily ?<img src={ `http://openweathermap.org/img/wn/${nextWeatherInfo.daily[7].weather[0].icon}@2x.png` }/> : null}</div>
    </div>
       <div>{nextWeatherInfo.daily ? <div className="content">{nextWeatherInfo.daily[7].temp.day.toFixed() }°C</div> : null}</div>
      </div>
    </div>  
    
)



export default WeatherTab;