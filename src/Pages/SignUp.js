import React, { useState } from 'react';


import * as Realm from "realm-web";

export default function SignUp() {

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');

  const email = "someone@example.com";
  const password = "Pa55w0rd";


  async function createUser(email, password) {
    const conf = await app.emailPasswordAuth.registerUser(email, password);
    console.log(conf)
  }

  //createUser("joe.jasper@example.com", "passw0rd").then(user => {console.log("Successfully logged in!", user)})

  const onSubmit = () => {
    console.log("ha");
    alert('No')
  };

  return (
    <div>
      SignUp
      <form onSubmit={onSubmit()}>
        <label>
          Email Address:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confPassword" />
        </label>
          <input type="submit" value="Sign Up" onSubmit={onSubmit}/>
      </form>
    </div>
  );
}
