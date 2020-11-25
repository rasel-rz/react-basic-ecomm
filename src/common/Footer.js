import React, { Component } from 'react';
/* import SocketLive from './SocketLive'; */

export default class Footer extends Component {
    render() {
        return (
            <div className="fixed-bottom ml-3 mr-3 bg-dark text-light row">
                <div className="col text-center">Copyright &copy; All rights reserved by Rasel.</div>
                {/* <div className="col text-right"><SocketLive/></div> */}
            </div>
        )
    }
}