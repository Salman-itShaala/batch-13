// key = e9a96cfc5c981bda8bb9754bd37a2503

// http://api.weatherstack.com/current?access_key=a849f1413213dea07377caf6d6323584&query=New York

function sendReq() {
  const promise = fetch(
    "https://api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=pune"
  );

  promise
    .then((res) => res.json())
    .then((data) => {
      // show this data on front end
      console.log(data);
    })
    .catch((err) => console.log(err));
}
