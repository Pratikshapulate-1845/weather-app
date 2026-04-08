const apiKey = "60c470ccc9a6215502407fa9f0d74a37";

async function getWeather() {
  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); 

    if (data.cod !== 200) {
      document.getElementById("weather").innerHTML = data.message;
      return;
    }

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("weather").innerHTML = "Error fetching data";
  }
}