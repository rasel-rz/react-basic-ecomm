import './App.css';
import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import categoriesData from './Data/Categories'

class App extends Component {
  render(){
    console.log(categoriesData);
    return (
      <Router>
        <div className="container-fluid">
          <h1 className="text-center">Welcome to e-Shop</h1>
          <hr/>
            <Route exact path="/" render={props =>{
              return (<Products categories={categoriesData} />)
            }} />
        </div>
      </Router>
    );
  }
}

export default App;
