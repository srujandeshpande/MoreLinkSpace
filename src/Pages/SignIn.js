import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Realm from "realm-web";
import { useHistory } from "react-router-dom";

import {
  changeSign,
  changeLink,
  changeEmail,
  changeUser,
  selectSign,
  selectLink,
  selectEmail,
  selectUser,
} from '../Redux/linkSlice';



export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const email_store = useSelector(selectEmail);
  const sign_store = useSelector(selectSign);
  const user_store = useSelector(selectUser);

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');
  let history = useHistory();

  async function loginEmailPassword(email, password) {
  // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
    // Authenticate the user

      const user = await app.logIn(credentials);

    // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id);
      //dispatch(changeUser(JSON.stringify(user)));
      history.push('/someRoute', {var:user});
      return user;
    } catch(err) {
      console.error("Failed to log in", err);
      alert("Please try again with valid credentials")
    }
  }
/*
  loginEmailPassword("joe.jasper@example.com", "passw0rd").then(user => {

  console.log("Successfully logged in!", user)
})
*/
  function handleSignIn() {

    if(email != "" && password != ""){
      console.log(loginEmailPassword(email,password));
    }
    else{
      console.log("Try again");
    }
    //createUser("joe.jasper@example.com", "passw0rd").then(user => {
    //  console.log("Successfully logged in!", user)})
  };

  return (
    <div>
      SignIn
      <form onSubmit={(e) => {e.preventDefault();
        handleSignIn()}}>
        <label>
          Email Address:
          <input type="email" name="email" onChange={(e) => {setEmail(e.target.value);}}/>
        </label>
        <label>
          Password:{user_store}
          <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
        </label>
          <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
