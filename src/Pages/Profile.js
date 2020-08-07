import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


import * as RealmWeb from "realm-web";



export default function Profile(props) {
  let { id } = useParams();

  return (
    <div>
      Viewing Links for: {id}
    </div>
  );
}
