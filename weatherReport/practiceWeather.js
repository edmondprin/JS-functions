function showweatherData(event) {
  event.preventDefault();

const lat = parseFloat(document.getElementById('latitude').value);
const lon = parseFloat(document.getElementById('longitude').value);
console.log("lat", lat, typeof(lat));
console.log("lon", lon, typeof(lon));
const apiKey = 'c919395b052b3e72a70c81c7471a3f5f';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    const jsonReport = JSON.stringify(data, null, 2);
    downloadJsonReport("report.json", jsonReport);
    weatherInfo.innerHTML = `<h2>Weather for longitude ${data.coord.lon} and latitude ${data.coord.lat}</h2>
                            <p>Temperature: ${data.main.temp}</p>
                            <p>Wind speed: ${data.wind.speed}</p>`;
  })
  .catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again</p>`;
    });
  }
    document.getElementById('weatherForm').addEventListener('submit', showweatherData);

    function downloadJsonReport(filename, jsonString) {
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
