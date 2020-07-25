import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Realm from "realm-web";

import {
  changeSign,
  changeLink,
  changeEmail,
  selectSign,
  selectLink,
  selectEmail,
} from '../Redux/linkSlice';




export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');

  function testf(){
    alert("hi")
  }

  async function createUser(email, password) {
    await app.emailPasswordAuth.registerUser(email, password)
    .then(
      (val) => {
        console.log("User Successfully Created");
        dispatch(changeSign(true));
        dispatch(changeEmail(email));
      }
    ).catch(
      (val) => {
        console.log("Error Please try again");
        alert("This email address is already in use or your password is not long enough")
      }
    );
  }

  function handleNewUserSubmit() {

    if(email != "" && password != ""){
      createUser(email,password);
    }
    else{
      console.log("Try again");
    }
    //createUser("joe.jasper@example.com", "passw0rd").then(user => {
    //  console.log("Successfully logged in!", user)})
  };

  return (
    <div>
      SignUp
      <form onSubmit={(e) => {e.preventDefault();
        handleNewUserSubmit()}}>
        <label>
          Email Address:
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </label><br/>
        <label>
          Password (Must be atleast 6 characters long):
          <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
        </label><br/>
          <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
