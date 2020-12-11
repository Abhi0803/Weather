import React from 'react';
import {getTime} from './TimeStamp.jsx';

function Table(props) {
return(
  <table className="table table-hover inline">
    <tbody className="inline-block">
      <tr>
        <th scope="row">Feels Like</th>
        <td colSpan="2">{props.data.main.feels_like + " ℃"}</td>
      </tr>
      <tr>
        <th scope="row">Min. Temperature</th>
        <td colSpan="2">{props.data.main.temp_min + " ℃"}</td>
      </tr>
      <tr>
        <th scope="row">Max. Temperature</th>
        <td colSpan="2">{props.data.main.temp_max + " ℃"}</td>
      </tr>
      <tr>
        <th scope="row">Wind Speed</th>
        <td colSpan="2">{props.data.wind.speed + "Km/h"}</td>
      </tr>
      <tr>
        <th scope="row">Sunrise</th>
        <td colSpan="2">{getTime(props.data.sys.sunrise)}</td>
      </tr>
    </tbody>
      <tbody className="inline-block">
        <tr>
          <th scope="row">Wind Direction</th>
          <td colSpan="2">{props.data.wind.deg + " °"}</td>
        </tr>
        <tr>
          <th scope="row">Visibility</th>
          <td colSpan="2">{((props.data.visibility)/1000) + " km" }</td>
        </tr>
        <tr>
          <th scope="row">Pressure</th>
          <td colSpan="2">{props.data.main.pressure + " mbar"}</td>
        </tr>
        <tr>
          <th scope="row">Humidity</th>
          <td colSpan="2">{props.data.main.humidity + "%"}</td>
        </tr>
        <tr>
          <th scope="row">Sunset</th>
          <td colSpan="2">{getTime(props.data.sys.sunset)}</td>
        </tr>
    </tbody>
  </table>
)
}
 export default Table;
