import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.location.state){
      this.props.history.push('/');
      return (
        <div>Redirecting to list...</div>
      )
    }else {
      const {id, name, email, username, address, phone, website, company} = this.props.location.state.user;
      return (
        <div>
          <div className="card">
            <h5 className="card-header">
              <div className="row mb-0">
                <div className="col-auto mr-auto"> {name} </div>
                <div className="col-auto m-auto text-secondary text-center"> {username.toLowerCase()} ({id}) </div>
                <div className="col-auto ml-auto text-right">
                  <Link to="/">back</Link>
                </div>
              </div>
            </h5>
            <div className="card-body">
              <h5 className="card-title text-lowercase">{email}</h5>
              <div className="card-text row">
                <div className="col-md-6">
                  <div className="font-weight-bold">Address:</div>
                  <div className="pl-2">
                    {address.suite}, {address.street} <br />
                    {address.city}, {address.zipcode}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="font-weight-bold">Phone:</div>
                  <div className="pl-2">
                    {phone}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="font-weight-bold">Website:</div>
                  <div className="pl-2">
                    {website}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="font-weight-bold">Company:</div>
                  <div className="pl-2">
                    {company.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default User;