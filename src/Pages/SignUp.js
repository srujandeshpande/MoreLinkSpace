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

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');

  function testf(){
    alert("hi")
  }

  async function createUser(email, password) {
    const conf = await app.emailPasswordAuth.registerUser(email, password)
    .then(
      val => console.log("done",val)
    ).catch(
      val => console.log("die", val)
    );
    console.log(conf)
  }

  function handleNewUserSubmit() {

    if(email != "" && password != ""){
      console.log(email,password);
      createUser(email,password).then(user => {
        console.log("Created user:",user)
      })
    }
    else{
      console.log("fail hah");
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
        </label>
        {email}{password}
        <label>
          Password:
          <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
        </label>
          <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
