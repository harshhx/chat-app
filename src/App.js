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
      <div className="app">
        <div className="app_body">
          <Router>
            {/* <GetRoomList /> */}
            <Switch>
              <Route exact path="/rooms/:id">
                <GetRoomList />
                <Chat />
              </Route>
              
              <Route exact path="/addRoom">
                <GetRoomList />
                <AddRoom />
              </Route>
              <Route path="/">
                <GetRoomList />
                {/* <AddRoom /> */}

              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
