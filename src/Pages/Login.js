import React, { useState } from 'react';
import * as Realm from "realm-web";

const REALM_APP_ID = "morelinkspace-dekxs"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });



// Create a component that lets users log in
export default function Login({ setUser, email, setEmail }) {

  const [password, setPassword] = useState("");

  const loginEmail = async () => {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    //const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };

  const createUser = async () => {
    await app.emailPasswordAuth.registerUser(email, password)
    .then(
      (val) => {
        console.log("User Successfully Created");
        loginEmail();
      }
    ).catch(
      (val) => {
        console.log("Error Please try again");
        alert("This email address is already in use or your password is not long enough");
      }
    );
  }

  return (
    <div>
    <h3> Sign In </h3>
    <form onSubmit={(e) => {e.preventDefault();
      loginEmail()}}>
      <label>
        Email Address:
        <input type="email" name="email" onChange={(e) => {setEmail(e.target.value);}}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
      </label>
        <input type="submit" value="Sign In" />
    </form>
      <h3>SignUp</h3>
      <form onSubmit={(e) => {e.preventDefault();
        createUser()}}>
        <label>
          Email Address:
          <input type="email" name="email" onChange={(e) => {setEmail(e.target.value);}}/>
        </label><br/>
        <label>
          Password (Must be atleast 6 characters long):
          <input type="password" name="password" onChange={(pw) => setPassword(pw.target.value)}/>
        </label><br/>
          <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
  //<button onClick={loginAnonymous}>Log In</button>;
}
