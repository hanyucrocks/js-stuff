const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherDisplay.textContent = "Please enter a city.";
    return;
  }

  weatherDisplay.textContent = "Loading...";

  try {
    const apiKey = "YOUR_API_KEY_HERE";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found.");
    }

    const data = await response.json();
    weatherDisplay.innerHTML = `
      <p>🌇 City: ${data.name}</p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherDisplay.textContent = `Error: ${error.message}`;
  }
});
