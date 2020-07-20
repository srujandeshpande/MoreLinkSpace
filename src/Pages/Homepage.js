import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeId,
  changeName,
  selectId,
  selectName,
  joinRoom,
} from '../redux/gameSlice';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
//import store from '../redux/store'
//import Types from '../redux/actionTypes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Homepage() {

  return (
    <div>
      Herer
    </div>
  );
}
