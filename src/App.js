import './App.css';
import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import categoriesData from './Data/Categories'
import Navbar from './common/Navbar';

class App extends Component {
  render(){
    console.log(categoriesData);
    return (
      <Router>
        <div className="container-fluid">
        <Navbar />
            <Route exact path="/" render={props =>{
              return (<Products categories={categoriesData} />)
            }} />
        </div>
      </Router>
    );
  }
}

export default App;
