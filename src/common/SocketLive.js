import React, { Component } from 'react';
import { io } from 'socket.io-client';

export default class SocketLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        }
    }

    socketInit = () => {
        const wsUri = "http://localhost:5000";
        const socket = io(wsUri);
        console.log(socket);
        socket.on('message', (evt) => {
            console.log(evt);
        })
    }

    componentDidMount = () => {
        // this.socketInit();
    }

    render() {
        const notifications = this.state.notifications;
        return (
            <React.Fragment>
                {notifications.length < 1 && <span className="text-right">Waiting for socket connection...</span>}
            </React.Fragment>
        )
    }
}