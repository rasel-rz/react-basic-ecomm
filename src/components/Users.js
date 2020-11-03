import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import UserCard from './UserCard'

class Users extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Get url="https://jsonplaceholder.typicode.com/users?_limit=10">
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div className="text-center">Loading...</div>)
          }
          else if(response !== null) {
            console.log(response.data)
            return (<div className="row">{response.data.map(user =>{return (<UserCard key={user.id} user={user}/>)})}</div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
      </div>
    );
  }
}

export default Users;