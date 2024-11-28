import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDailyForecast.css";
import axios from "axios";

export default function WeatherDailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherDailyForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Fri</div>
            <WeatherIcon code="clear-sky-day" size={36} />
            <div className="WeatherForecastTemperatures">
              <span className="WeatherForecastTempMax">20°</span>
              <span className="WeatherForecastTempMin">0°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "t61a3de96178c340b47o7ff32962bb7f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
