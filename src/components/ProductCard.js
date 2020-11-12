import React, { Component } from 'react'

class ProductCard extends Component {
  render() {
    const {name, price, unit} = this.props.product;
    return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-auto">
      <div className="card" style={{width: '100%', marginBottom: '1rem'}}>
        <div className="card-body">
          <h5 className="card-title single-line">{name}</h5>
          <p className="card-text">
            Price: {price} <br/>
            Unit: {unit?unit:'1 Item'}
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default ProductCard;