import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Realm from "realm-web";
import { useHistory } from "react-router-dom";

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
  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const email_store = useSelector(selectEmail);
  const sign_store = useSelector(selectSign);
  let history = useHistory();

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');

  var status = "Not Set";

  async function createUser(email, password) {
    await app.emailPasswordAuth.registerUser(email, password)
    .then(
      (val) => {
        console.log("User Successfully Created");
        dispatch(changeSign(email));
        dispatch(changeEmail(email));
      }
    ).catch(
      (val) => {
        console.log("Error Please try again");
        alert("This email address is already in use or your password is not long enough");
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
          Email Address:{email_store}:{sign_store}
          <input type="email" name="email" onChange={(e) => {setEmail(e.target.value);}}/>
        </label><br/>
        <label>
          Password (Must be atleast 6 characters long):
          <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
        </label><br/>
        <label>
          Link:
          <input type="text" name="Link" onChange={(e) => {setLink(e.target.value)}}/>
        </label>{status}<br/>
          <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
