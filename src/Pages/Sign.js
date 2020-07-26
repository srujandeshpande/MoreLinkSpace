import React, { useState } from 'react';
import * as Realm from "realm-web";

import Login from "./Login";

const REALM_APP_ID = "morelinkspace-dekxs"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });


// Create a component that displays the given user's details
function UserDetail({ user }) {

  const [datal, setDatal] = useState("");
  const [link, setLink] = useState("");
  const [tempLink, setTempLink] = useState("");
  const [linkStat, setLinkStat] = useState(false);

  async function DupCheck() {
    console.log(tempLink);
    await user.functions.searchLinks(tempLink).then(
    (val)=>{
      console.log(val);
      if(val.length === 0) {
        console.log("Here");
        async function setLinkF() {
          console.log(user.id, tempLink);
          await user.functions.setLink(user.id, tempLink).then(
          (val) => {
            alert("Link Successfully Set");
            setLink(tempLink);
          }).catch(
          (val) => {
            alert("Please try again/later");
            console.log(val);
          }).finally(() => {
            console.log("This happened");
          });
        }
        setLinkF();

      }
      else {
        alert("Link already in use");
      }
    }
  )};


  const result = async () => {await user.functions.getData(user.id).then(
    (val)=>{
      console.log(val);
      setLink(val.link);
      if(val.data){
        setDatal(val.data);
      }
      else{
        setDatal([]);
      }
    }
  ).catch(
    (val) =>{
      console.log(val);
    }
  )};
  result();

  return (
    <div>{datal}
      <h1>Logged in with id: {user.id}</h1>
      <form onSubmit={(e) => { e.preventDefault(); DupCheck()}}>
        <label>
          Custom Link - {linkStat}
          <input type="text" name="link" placeholder={link} onChange={(e) => { e.preventDefault(); setTempLink(e.target.value)}}/>
          <input type="submit" value="Save Custom Link" />
        </label>
      </form>
      <table>
      <tr>
      <th>Name</th>
      <th>URL</th>
      </tr>
      </table>
    </div>
  );
}


const App = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = useState(app.currentUser);
  const [email, setEmail] = useState("");

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
      <h1>More Link Space!</h1>
        {user ? <UserDetail user={user}/> : <Login setUser={setUser} email={email} setEmail={setEmail} />}
      </div>
    </div>
  );
}

export default App;
