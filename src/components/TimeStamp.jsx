

function getTime(time) {
  var date = new Date(time*1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return (convdataTime);
}


function Time(props) {
  let time = props.timeStamp;

  function getFullTime(time) {
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = new Date(time*1000);
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + month+'-'+(day >= 10 ? day: '0' + day )+'-'+year;

    return (convdataTime);
  }

  return (getFullTime(time));

}

export default Time;
export {getTime};
