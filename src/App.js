import './App.css';
import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './components/Users'
import User from './components/User'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Name Abc'};
  }
  render(){
    return (
      <Router>
        <div className="container">
          <h1 className="text-center">Hello World</h1>
          <hr/>
            <Route exact path="/" render={props =>{
              return (<Users />)
            }} />
            <Route path="/user" component={User}/>
        </div>
      </Router>
    );
  }
}

export default App;
