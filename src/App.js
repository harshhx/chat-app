// import React from 'react'
import Chat from "./chat";
import MyFunctionalComponentFunction from "./get_data";
import { addData } from "./test";
// import GetRoomList from './get_rooms_of_user'
import { Print } from "./test";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  const [message, setMessage] = React.useState("");
  const [list, setData] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const test = [];
    const q = query(
      collection(db, "THREADS"),
      where("users", "array-contains", 1)
    );
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      test.push([doc.data(), doc.id]);
    });
    // console.log("Test is ", test);
    setData(test);
    setMessage("Test Message");
  };

  console.log(list);

  return (
    <div>
      {/* <GetRoomList /> */}
      {/* <MyFunctionalComponentFunction /> */}
      {/* <Print /> */}
      {/* <Chat /> */}

      <Router>
        <div>
          <h2>Rooms</h2>

          {list.map((res,index) => (
            <div>
              {/* <h1>{res.name}</h1> */}
              <h1><Link to={`/${res[1]}`}>{res[0].name}</Link></h1>
            </div>
          ))}
          <Switch>
            <Route path="/:id" component={Chat} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
