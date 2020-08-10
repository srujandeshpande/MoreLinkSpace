import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


import * as RealmWeb from "realm-web";



export default function Profile(props) {
  let { id } = useParams();

  return (
    <div className="App">
      <div className="App-header">
        <h1>{id}'s Links!</h1>
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
    </div>
  );
}
