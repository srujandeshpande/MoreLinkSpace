import React, { useState, useEffect } from 'react';
import * as Realm from "realm-web";

import Login from "./Login";

const REALM_APP_ID = "morelinkspace-dekxs"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });


// Create a component that displays the given user's details
function UserDetail({ user, email }) {

  //console.log("Func,",email);

  const [datal, setDatal] = useState("");
  const [link, setLink] = useState("");
  const [tempLink, setTempLink] = useState("");
  const [linkStat, setLinkStat] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(true);
  const [iurl, setIurl] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {

    if(dataLoaded){
      (async () => {await user.functions.getData(user.id).then(
        (val)=>{
          console.log(val);
          setLink(val.link);
          if(val.data){
            setDatal("ji");
            console.log(val);
          }
          else{
            setDatal(["hi"]);
          }
        }
      ).catch(
        (val) =>{
          console.log(val);
        }
      )})();

      setDataLoaded(false);
    }

  })

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


  async function AddLink() {
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


  return (
    <div>{datal}
      <h1>Logged in with id: {user.id}</h1>
      <form onSubmit={(e) => { e.preventDefault(); DupCheck()}}>
        <label>
          Custom Link
          <input type="text" name="link" placeholder={link} onChange={(e) => { e.preventDefault(); setTempLink(e.target.value)}}/>
        </label>
        <input type="submit" value="Save Custom Link" />
      </form>
      <form onSubmit={(e) => { e.preventDefault(); AddLink()}}>
        <label>
          Add New link
          <input type="text" name="url" onChange={(e) => { e.preventDefault(); setIurl(e.target.value)}}/>
        </label>
        <label>
          Link description
          <input type="text" name="url" onChange={(e) => { e.preventDefault(); setDesc(e.target.value)}}/>
        </label>
        <input type="submit" value="Save Custom Link" />
      </form>
      <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://google.com">https://google.com</a></td>
          <td>Mock</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}



const App = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = useState(app.currentUser);
  console.log(user);
  //const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
      <h1>More Link Space!</h1>
        {user ? <UserDetail user={user} email={email}/> : <Login setUser={setUser} email={email} setEmail={setEmail} />}
      </div>
    </div>
  );
}

export default App;
