import React from 'react';

//sub components
import Title from './Components/Title';
import Form from './Components/From';
import Weather from './Components/Weather';

//semantic UI and css
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'

//api keys
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeathers = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const externalApi_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //converting the response to json format
    const data = await externalApi_call.json();
    //update the state
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });

    //testing response
    // console.log(data);
  }
  render() {
    return (
      <div className="main-body">
      <Title></Title>
        <Card >

          <Card.Content>

            <Card.Header><Form getWeather={this.getWeathers} /></Card.Header>
            <Card.Description>
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/Rajangrg"><Icon name='user' />Create by Gurung</a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;



