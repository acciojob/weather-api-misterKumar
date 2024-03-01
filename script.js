
		const getCurrentWeather = () => {
			const url =
				"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de";

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					const weatherData = document.getElementById("weatherData");
					weatherData.textContent = `Current weather in London: ${data.weather[0].main}`;
				})
				.catch((error) => console.error(error));
		};
