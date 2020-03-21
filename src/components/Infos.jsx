/* eslint-disable react/prop-types */
/* 
  @brief Component with the infos about weather
  @params Props with data of weather and local
*/
import React from 'react';
import './../lib/aux-functions';
import { convertToCelsius, range } from './../lib/aux-functions';

const Infos = (props) => {
  let cityInfo = {
    weather: props.data.weather[0].main,
    description: props.data.weather[0].description,
    icon: props.data.weather[0].icon,
    ...props.data.main
  }

  const convert = convertToCelsius;
  const unit = 'C'
  const temp = Math.round(convert(cityInfo.temp));
  const tempMin = Math.round(convert(cityInfo.temp_min));
  const tempMax = Math.round(convert(cityInfo.temp_max));
  const feelsLike = Math.round(convert(cityInfo.feels_like));
  const tempCelsius = (unit === 'C') ? temp : Math.round(convertToCelsius(cityInfo.temp));
  
  /*
    @brief This function determines the color of temp for inclusion of that in the ranges
    @params t = temperatura
    @return the color string
  */

  const colorTherm = (t) =>{
    const colorRanges = [range(1, 10), range(11, 20), range(21, 30), range(31, 50)];
    const colors = ['blue', 'green', 'yellow', 'orange']

    const rangeTemp = colorRanges.map((r, i) => r.includes(t) ? i : -1);
    
    return colors[Math.max.apply(null, rangeTemp)];
  };


  return (
    <div>
      <p className='cardTitle'>
        {props.local.city}&#160;&#160;
        <img 
          src={`./icons/${props.local.country}.png`} 
          alt={`.${props.local.country}`} 
          className='cardTitleImg'
        />
      </p>
      <div className='infoSection'>
        <img 
          src={`http://openweathermap.org/img/wn/${cityInfo.icon}@2x.png`}
          title={`${cityInfo.description}`} 
          alt={`${cityInfo.weather}`}
          className='icon' 
        />
        <div>
          <p className={`temp ${colorTherm(tempCelsius)}`}>
            {`${temp}º${unit}`}
          </p>
          <p>
            <span>Min: {`${tempMin}º${unit}`}&#160;&#160;</span>
            <span>Max: {`${tempMax}º${unit}`}</span>
          </p>
          <p>
            <span>Pressure: {`${cityInfo.pressure}`} hPa&#160;&#160;</span>
            <span>Humidity: {`${cityInfo.humidity}`} %</span>
          </p>
          <p>
            Feels like: {`${feelsLike}`}º
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infos;