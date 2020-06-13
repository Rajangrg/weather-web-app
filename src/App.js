import React from 'react';

//sub components
import Title from './Components/Title';
import Form from './Components/From';

class App extends React.Component{
  render(){
    return (
      <div>
       <Title></Title>
       <Form></Form>
      </div>
    );
  }
}

export default App;