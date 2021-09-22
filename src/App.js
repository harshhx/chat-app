// import React from 'react'
import Chat from "./chat";
import MyFunctionalComponentFunction from "./get_data";
import { addData } from "./test";
import GetRoomList from "./get_rooms_of_user";
import { Print } from "./test";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddRoom from "./AddRoom";

import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <Link to="/" />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/roomlist" component={GetRoomList}></Route>
            <Route exact path="/addroom" component={AddRoom}></Route>
            <Route exact path="/:id" component={Chat} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
