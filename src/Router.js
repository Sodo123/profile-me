import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './components/pages/home'
  import Profile from './components/pages/profile'
  
  function Users() {
    return <h2>Users</h2>;
  }


export default class Routers extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
          </Switch>
        )
    }
}