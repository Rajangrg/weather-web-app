import React from 'react';

//sub components
import Title from './Components/Title';
import Form from './Components/From';
import Weather from './Components/Weather';

//api keys
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {


  getWeathers = async (e)=>{
    e.preventDefault();
    const externalApi_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
    //converting the response to json format
    const data = await externalApi_call.json()
    console.log(data);
  }

  render() {
    return (
      <div>
        <Title></Title>
        <Form getWeather= {this.getWeathers}></Form>
        <Weather></Weather>
      </div>
    );
  }
}

export default App;