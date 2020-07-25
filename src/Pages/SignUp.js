import React, { useState } from 'react';


import * as Realm from "realm-web";

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = new Realm.App({ id: "morelinkspace-dekxs" });
  var assert = require('assert');
/*
  async function createUser(email, password) {
    const conf = await app.emailPasswordAuth.registerUser(email, password);
    console.log(conf)
  }

  const onSubmit = () => {
    createUser("joe.jasper@example.com", "passw0rd").then(user => {
      console.log("Successfully logged in!", user)})
  };
*/
  return (
    <div>
      SignUp
      <form onSubmit={13/*onSubmit()*/}>
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
