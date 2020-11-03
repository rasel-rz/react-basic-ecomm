import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UserCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {name, email, phone, website} = this.props.user;
    return (
    <div className="col-4 m-auto">
      <div className="card" style={{width: '100%', marginBottom: '1rem'}}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Email: {email} <br/>
            Phone: {phone} <br/>
            Website: <span className="text-muted">{website}</span>
          </p>
          <Link to={{
            pathname: '/user',
            state: {
              user: this.props.user,
            },
          }} className="btn btn-primary">View details</Link>
        </div>
      </div>
    </div>
    )
  }
}

export default UserCard;