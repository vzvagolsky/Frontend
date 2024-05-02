const apiKey = 'd83cb9e2b6fe3e62320c34a0172d1ff0';
const form = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('city').value;
    getWeather(cityInput);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            let temperature = Math.round(Number(data.main.temp));
            let pressure =   data.main.pressure;
			const weatherIcon = data.weather[0].icon; 
            const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`; 

			
            weatherInfo.innerHTML = `
                <h2>Погода в городе ${city}:</h2>
                <p>Температура: ${temperature}°C</p>
                <p>Давление: ${pressure} hPa</p>
				<img src="${iconUrl}" alt="Погода">
            `;
        })
        .catch(error => {
            weatherInfo.textContent = 'Ошибка при получении данных';
            console.error('Ошибка при получении данных:', error);
        });
}