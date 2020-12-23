import React, { Component } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

export default class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
        }
    }

    updateCart = (isIncrement) => {
        if (isIncrement) { this.setState({ cartCount: this.state.cartCount + 1 }) }
        if (!isIncrement && this.state.cartCount !== 0) { this.setState({ cartCount: this.state.cartCount - 1 }) }
    }

    render() {
        const cartCount = this.state.cartCount;
        return (
            <React.Fragment>
                {!cartCount && <div className="btn btn-sm btn-outline-secondary" onClick={this.updateCart.bind(this, true)}>Add to cart</div>}
                {(cartCount !== 0) &&
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary"><FaMinus /></button>
                        <button type="button" className="btn btn-outline-secondary text-center">{cartCount}</button>
                        <button type="button" className="btn btn-secondary"><FaPlus /></button>
                    </div>
                }
            </React.Fragment>
        )
    }
}