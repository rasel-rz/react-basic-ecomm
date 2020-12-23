import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../actions';
export default function Footer() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="fixed-bottom ml-3 mr-3 bg-dark text-light row">
            <div className="col text-center" onClick={() => dispatch(increment())}>Copyright &copy; {counter} All rights reserved by Rasel.</div>
        </div>
    )
}