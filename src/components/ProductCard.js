import React from 'react';
import { FaShoppingBag, FaTag } from "react-icons/fa";
import ProductCart from './ProductCart';

function ProductCard(props) {
  const { name, price, unit, img } = props.product;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-auto">
      <div className="card" style={{ width: '100%', marginBottom: '1rem' }}>
        <img height="150px" className="card-img-top p-1" src={img} alt={name} style={{ objectFit: 'cover' }} />
        <div className="card-body pt-1">
          <h5 className="card-title mb-0 single-line">{name}</h5>
          <div className="card-text row pt-1">
            <div className="col text-wrap"><FaTag /> {price} BDT</div>
            <div className="col text-right"><FaShoppingBag /> {unit ? unit.toUpperCase() : '1 ITEM'}</div>
          </div>
        </div>
        <div className="card-footer bg-transparent text-center"><ProductCart /></div>
      </div>
    </div>
  )
}

export default ProductCard;