import React, { Component } from 'react';
import { FaCanadianMapleLeaf } from "react-icons/fa";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">
                    <FaCanadianMapleLeaf /> E-Shopping
                </span>
            </nav>
        )
    }
}