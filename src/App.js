import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from '../src/components/header/header.component'
import Landing from '../src/pages/landing/landing.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path='/' component={Landing}></Route> 
    </div>
  );
}

export default App;