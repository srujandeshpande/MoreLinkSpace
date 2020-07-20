import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import Homepage from './Homepage';
import Profile from './Profile';
import EditProfile from './EditProfile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route path='/edit/:id' component = {EditProfile}/>
        <Route path='/:id' component = {Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
