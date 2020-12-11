import React from "react";
import Input from "./components/Input.jsx";
import WeatherData from "./components/WeatherData.jsx";
import Error from "./components/Error.jsx";
import Axios from "axios";

function App() {
  const [apiData, setApiData] = React.useState({
    city: "",
    url: "",
  });
  const [data, setData] = React.useState({
    weather: {
      id: null,
      main: null,
      description: null,
    },
    main: {
      temp: null,
      feels_like: null,
      temp_min: null,
      temp_max: null,
      pressure: null,
      humidity: null,
    },
    visibility: null,
    wind: {
      speed: null,
      deg: null,
    },
    dt: null,
    sys: {
      id: null,
      country: null,
      sunrise: null,
      sunset: null,
    },
    id: null,
    name: null,
  });
  const [isSet, setisSet] = React.useState(false);
  const [isFault, setisFault] = React.useState(false);
  const [error, seterror] = React.useState({
    error: 0,
    message: "",
    size: document.body.clientWidth * (84 / 1280) + "px",
  });

  const apiUrl = {
    head: "http://api.openweathermap.org/data/2.5/weather?q=",
    foot: "&appid=056ceaec162d84d33b4cb29dee7ef1d5&units=metric",
  };

  React.useEffect(() => {
    Axios.get(apiData.url)
      .then((res) => {
        setisFault(false);
        isSet &&
          setData({
            weather: {
              id: res.data.weather[0].id,
              main: res.data.weather[0].main,
              description: res.data.weather[0].description,
            },
            main: {
              temp: res.data.main.temp,
              feels_like: res.data.main.feels_like,
              temp_min: res.data.main.temp_min,
              temp_max: res.data.main.temp_max,
              pressure: res.data.main.pressure,
              humidity: res.data.main.humidity,
            },
            visibility: res.data.visibility,
            wind: {
              speed: res.data.wind.speed,
              deg: res.data.wind.deg,
            },
            dt: res.data.dt,
            sys: {
              id: res.data.sys.id,
              country: res.data.sys.country,
              sunrise: res.data.sys.sunrise,
              sunset: res.data.sys.sunset,
            },
            id: res.data.id,
            name: res.data.name,
          });
        setApiData((prev) => {
          return {
            city: "",
            url: prev.url,
          };
        });
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          setApiData((prev) => {
            return {
              city: "",
              url: prev.url,
            };
          });
          setisFault(true);
          setisSet(false);

          seterror({
            error: error.response.status,
            message: error.response.data.message,
          });
        } else if (error.request) {
          // The request was made but no response was received
          setApiData((prev) => {
            return {
              city: "",
              url: prev.url,
            };
          });
          setisFault(true);
          setisSet(false);
          seterror((prev) => {
            return { error: prev.error, message: "Network Connection Is Down" };
          });
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          setApiData((prev) => {
            return {
              city: "",
              url: prev.url,
            };
          });
          setisFault(true);
          setisSet(false);
          seterror((prev) => {
            return {
              error: prev.error,
              message: "Please Check the Files.Problem With the Site",
            };
          });
        }
      });
  }, [isSet, apiData.url]);

  function handleChange(event) {
    const value = event.target.value;
    setApiData((prev) => {
      return {
        city: value,
        url: prev.url,
      };
    });
  }

  function handleClick(event) {
    setApiData((prev) => {
      return {
        city: prev.city,
        url: apiUrl.head + apiData.city + apiUrl.foot,
      };
    });
    setisSet(true);
    // setURL(head + "rewa" + foot);
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          handleChange={handleChange}
          handle={handleClick}
          city={apiData.city}
        />
        {isFault && <Error error={error} />}
        {isSet && <WeatherData data={data} />}
      </header>
    </div>
  );
}

export default App;
