import React from 'react';
import Time from './TimeStamp.jsx';
import Table from './Table.jsx'

function WeatherData(props) {
  var time = props.data.dt;

  function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

  return (
    <div>
      <h1> {props.data.main.temp + " ℃"} </h1>
      <h2> {props.data.name + " (" + props.data.sys.country  +  ")"} </h2>
      <h1> {capitalize(props.data.weather.description)} </h1>
      <h4> Measured At : <Time timeStamp={time} /></h4>
      <Table data={props.data} />
    </div>
  )
}

export default WeatherData;
