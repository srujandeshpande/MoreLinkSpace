import React, { useState } from 'react';
import * as Realm from "realm-web";

import SignUp from './SignUp';
import SignIn from './SignIn';
import Sign from './Sign';

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


export default function Homepage() {

  const app = new Realm.App({ id: "morelinkspace-dekxs" });

  return (
    <div>
      <Sign/>
    </div>
  );
}
