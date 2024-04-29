import React, { useState } from 'react'
import './WeatherApp.css';

import search_icon from "../assets/search.png";
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png'


export const WeatherApp = () => {

        let api_key ="54e47aa9c5848913497867c5e2c1277d";

        const[wicon,setWicon] = useState(cloud_icon)

        const search = async () => {
            const element = document.getElementsByClassName("cityInput")
            if (element[0].value==="")
            {
                return 0;
            }
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

            let resonse = await fetch(url);
            let data = await resonse.json();
            const humidity =document.getElementsByClassName("humidity-percentage");
            const wind = document.getElementsByClassName("wind-rate");
            const temprature =document.getElementsByClassName("weather-temp");
            const location =document.getElementsByClassName("weather-location");

            humidity[0].innerHTML=data.main.humidity+"%";
            wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
            temprature[0].innerHTML =Math.floor(data.main.temp)+"°c";
            location[0].innerHTML =data.name;


            if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
            {
                setWicon(clear_icon);
            }
            else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n")
            {
                setWicon(cloud_icon);
            }
            else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n")
            {
                setWicon(drizzle_icon);
            }
            else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n")
            {
                setWicon(drizzle_icon);
            }
            else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n")
            {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n")
            {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n")
            {
                setWicon(snow_icon);
            }
            else{
                setWicon(clear_icon);
            }

        }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" class="cityInput" placeholder='search'/>
                <div className="search_icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
         </div>
         <div className="weather_image">
                <img src={wicon} alt="" />
        </div>
            <div className="weather-temp">24c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">65%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default WeatherApp;
