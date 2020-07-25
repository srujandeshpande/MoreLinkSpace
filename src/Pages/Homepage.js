import React, { useState } from 'react';

/*
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';

*/
import * as Realm from "realm-web";

export default function Homepage() {

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');

  async function loginEmailPassword(email, password) {
  // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
    // Authenticate the user

      const user = await app.logIn(credentials);

    // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id)
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }

loginEmailPassword("joe.jasper@example.com", "passw0rd").then(user => {

  console.log("Successfully logged in!", user)
})


  return (
    <div>
      Homepage
    </div>
  );
}
