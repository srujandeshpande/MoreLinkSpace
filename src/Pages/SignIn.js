import React, { useState } from 'react';

import * as Realm from "realm-web";

export default function SignIn() {

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
/*
  loginEmailPassword("joe.jasper@example.com", "passw0rd").then(user => {

  console.log("Successfully logged in!", user)
})
*/

  return (
    <div>
      SignIn
      <form>
        <label>
          Email Address:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
          <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
