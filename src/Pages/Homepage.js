import React, { useState } from 'react';
import * as Realm from "realm-web";

import Sign from './Sign';



export default function Homepage() {

  const app = new Realm.App({ id: "morelinkspace-dekxs" });

  return (
    <div>
      <Sign/>
    </div>
  );
}
