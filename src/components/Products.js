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
    categoryId = categoryId ? categoryId : '';
    searchString = searchString ? searchString : '';
    const url = `http://localhost:5000/api/products?category_id=${categoryId}&search=${searchString}`
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
    const categories = this.props.categories;
    const products = this.state.products;
    return (
      <div className="row mb-0">
        <Categories data={categories} handler={this.changeCategory} />
        <div className="col m-3 content-container">
          {!products.loading && products.data.length > 0 &&
            <div className="row content">{products.data.map((product) => {
              return <ProductCard product={product} key={product.id} />
            })}</div>
          }
          {products.loading &&
            <div className="d-flex justify-content-center content">
              <div className="spinner-border m-auto" style={{ width: '3rem', height: '3rem', }}>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }

          {!products.loading && products.data.length < 1 &&
            <div className="d-flex justify-content-center content">
              <div className="m-auto">
                No products found. Please recheck your search query.
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Products;