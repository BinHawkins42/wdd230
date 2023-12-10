

const urlforcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=-86.94&appid=faededabba2864043af1c01ff62e7c13&units=imperial'; 

function capitalizeWords(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

fetch(urlforcast)
.then(response => response.json())
.then(data => {
    // Extract relevant forecast data for the next three days
    const forecastDays = data.list.reduce((acc, forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);
        const forecastDay = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
        const forecastDateString = forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const temperature = forecast.main.temp.toFixed(1);
        const description = capitalizeWords(forecast.weather[0].description);

        // Check if the forecast day is not already added to the accumulator
        if (!acc.some(day => day.forecastDay === forecastDay)) {
            acc.push({
                forecastDay,
                temperature,
            });
        }

        return acc;
    }, []);

    // Display forecast information
    forecastDays.slice(0, 3).forEach((forecast, index) => {
        const { forecastDay, temperature,} = forecast;
        document.getElementById(`forecast-day-${index + 1}`).innerHTML = `${forecastDay}: ${temperature}°F`;
    });
})
.catch(error => {
    console.error('Error fetching forecast data:', error);
});