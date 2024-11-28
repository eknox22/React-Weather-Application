import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Fri</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTempMax">20</span>
            <span className="WeatherForecastTempMin">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
