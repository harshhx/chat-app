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
import { Link } from "react-router-dom";
import { db } from "./firebase";

function GetRoomList() {
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
      test.push([doc.data(),doc.id]);
    });
    // console.log("Test is ", test);
    setData(test);
    setMessage("Test Message");
  };
  // useEffect(() => {
  //   if (list.length >0){
  //   const sample = list[0]
  //   console.log(sample)
  // }
  // }, [list])

  // var roomlist = list.map(function (res) {
  //   return <li>{res.name}</li>;
  // });
  console.log(list)

  return (
    <div>
      {list.map((res) => 
        <div>
          {/* {console.log(res)}
          <h1>{res[0].name}</h1> */}
          <h1><Link to={`/${res[1]}`}> {res[0].name}</Link></h1>

          {/* <h1><a href={`/${res[1]}`}>{res[0].name}</a></h1> */}
          {/* <h1><a href={`/${res[1]}`}>{res[0].name}</a></h1> */}
        </div>
      )}
    </div>
  );
}

export default GetRoomList;
