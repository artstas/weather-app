import axios from "axios";

const API_KEY = '39c76dd3b0796c6c21d3006221a630f4'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}