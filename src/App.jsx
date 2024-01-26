import { WeatherApp } from "./WeatherApp";

function App() {
              
  const url = 'http://api.openweathermap.org/geo/1.0/direct?q=denver&limit=5&appid=99218561e9dfe46c782df8770eb1f77a';
  return (
    <WeatherApp/>
  )
}

export default App
