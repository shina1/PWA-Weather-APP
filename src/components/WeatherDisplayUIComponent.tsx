import React from 'react'
// import ErrorComponent from './ErrorComponent'
import './style.css'
type WeatherDisplayUIComponentProps = {
    data: any,
    error: boolean
}
const WeatherDisplayUIComponent = ({data, error}: WeatherDisplayUIComponentProps) => {
    // console.log(error);
    
  return (
    <>
     {
       error ? alert('wrong key word!, try a valid city or country') : data.main && (
            <div className="city">
                <h2 className="city-name">
                    <span>{data.name}</span>
                    <sup>{data.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {
                        Math.round(data.main.temp)
                    }
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className='city-icon' alt={data.weather[0].description} />
                    <p>{data.weather[0].description}</p>
                </div>
            </div>
        )
         
     }
    </>
  )
}

export default WeatherDisplayUIComponent
