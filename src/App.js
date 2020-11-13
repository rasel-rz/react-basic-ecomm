import './App.css';
import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: {
        data: [],
      }
    }
  }

  getCategories = () => {
    this.setState({ categories: { loading: true } });
    const url = `http://localhost:5000/api/categories`
    console.log(url);
    axios.get(url)
      .then((response) => {
        let categories = response.data;
        console.log(response.data)
        this.setState({ categories });
        this.setState(prevState => ({
          categories: {
            ...prevState.categories,
            loading: false,
          }
        }))
      })
  }

  componentDidMount = () => {
    this.getCategories();
  }
  render() {
    console.log(this.state.categories);
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Route exact path="/" render={props => {
            return (<Products categories={this.state.categories} />)
          }} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
