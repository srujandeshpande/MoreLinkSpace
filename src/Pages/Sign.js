import React, { useState } from 'react';
import * as Realm from "realm-web";

const REALM_APP_ID = "morelinkspace-dekxs"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

// Create a component that displays the given user's details
function UserDetail({ user }) {
  const result = async () => {await user.functions.sum(2, 3).then(
    (val)=>{
      console.log(val);
    }
  )};
  console.log(result().value);
  return (
    <div>
      <h1>Logged in with id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
function Login({ setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginEmail = async () => {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    //const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return (
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
  );
  //<button onClick={loginAnonymous}>Log In</button>;
}

const App = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState(app.currentUser);

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;
