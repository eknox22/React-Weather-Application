import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Bristol</h1>
      <ul>
        <li>Monday 19:45</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="placeholder"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind : 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
