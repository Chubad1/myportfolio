

const getWeather = () => {
    let API_KEY = "344fd7a0fc6092fc0d773d1259e96358"
    let city = "qatar"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let description = data.weather[0].description
            let temperature = data.main.temp
            let main = data.weather[0].main
            document.getElementById("maindescription").textContent = main
            document.getElementById("description").textContent = description
            document.getElementById("temperature").textContent = temperature
        })

}

getWeather();

// https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=344fd7a0fc6092fc0d773d1259e96358

