function showweatherDetails(event) {
  event.preventDefault();
  const city = document.getElementById('city').value;
  const apiKey = 'c919395b052b3e72a70c81c7471a3f5f'; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    const jsonReport = JSON.stringify(data, null, 2);
    console.log(jsonReport);
    weatherInfo.innerHTML = `<h2>Weather in ${data.name} (${data.sys.country})</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
  })
  .catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

/*
The preventDefault() method cancels the event if it is cancelable, 
meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL
*/
