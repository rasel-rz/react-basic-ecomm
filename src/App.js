import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from './actions'


function App() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [])
  return (
    <Router>
      <div id="container" className="container-fluid">
        <Navbar />
        <Route exact path="/" render={props => {
          return (<Products categories={categories} />)
        }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
