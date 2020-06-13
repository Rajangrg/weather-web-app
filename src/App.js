import React from 'react';

//sub components
import Title from './Components/Title';
import Form from './Components/From';
import Weather from './Components/Weather';

class App extends React.Component{
  render(){
    return (
      <div>
       <Title></Title>
       <Form></Form>
       <Weather></Weather>
      </div>
    );
  }
}

export default App;