import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './components/pages/home'
  import Profile from './components/pages/profile'
  import Todo from './components/pages/todo'

export default class Routers extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/todos">
                  <Todo />
                </Route>
          </Switch>
        )
    }
}