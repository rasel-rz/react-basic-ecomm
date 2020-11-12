import React, { Component } from 'react';
import axios from 'axios'

import ProductCard from './ProductCard'
import Categories from './Categories';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        data: []
      }
    }
  }

  getProducts = (categoryId, searchString) => {
    this.setState({ products: { loading: true } });
    categoryId = categoryId? categoryId: '';
    searchString = searchString? searchString: '';
    const url = `https://www.landknock.net/api/v2.0.0/public-products?category_id=${categoryId}&search=${searchString}`
    console.log(url);
    axios.get(url)
      .then((response) => {
        let products = response.data;
        console.log(response.data)
        this.setState({ products });
        this.setState(prevState => ({
          products: {
            ...prevState.products,
            loading: false,
          }
        }))
      })
  }

  changeCategory = (category, searchString) => {
    this.getProducts(category.id, searchString);
  }

  componentDidMount = () => {
    this.getProducts()
  }

  render() {
    const categories = this.props.categories.data;
    return (
      <div className="row mb-0">
        <Categories data={categories} handler={this.changeCategory}/>
        <div className="col p-3">
          {!this.state.products.loading && 
            <div className="row">{this.state.products.data.map((product) => {
              return <ProductCard product={product} key={product.id} />
            })}</div>
          }
          {this.state.products.loading &&
            <div>Loading...</div>
          }
        </div>
      </div>
    );
  }
}

export default Products;