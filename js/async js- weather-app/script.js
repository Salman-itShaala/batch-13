const cityInput = document.getElementById("city-input");
const cityWrapper = document.getElementById("city-wrapper");
const weatherImg = document.getElementById("weather-img");

function sendReq() {
  const city = cityInput.value;

  const promise = fetch(
    `https://api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=${city}`
  );

  promise
    .then((res) => res.json())
    .then((data) => {
      const resultCity = data.request.query;
      const resultTemp = data.current.temperature;
      const weatherImgUrl = data.current.weather_icons[0];
      const weatherDesc = data.current.weather_descriptions[0];
      const resultPressure = data.current.pressure;
      const resultPrec = data.current.precip;

      // update everything on front-end
      cityWrapper.innerText = resultCity;
      weatherImg.setAttribute("src", weatherImgUrl);
    })
    .catch((err) => console.log(err));
}
