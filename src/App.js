import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Homepage';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';

function App() {
  document.title = "More Link Space";
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
