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

function Print() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    addData();
  }, []);

  const addData = async () => {
    const BTECH = [];
    const MTECH = [];
    // to get users for specific degree

    const q = query(
      collection(db, "USERS"),
      where("cur_degree", "==", "BTECH")
    );
    // const q = query(collection(db, "USERS"));
    const querySnapshot = await getDocs(q);
    // const querySnapshot = getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      BTECH.push(doc.data());
      console.log("BTECH", BTECH)
    });
    console.log("BTECHHHH", BTECH)
    setData(BTECH)
    
    // const q2 = query(collection(db, "USERS"), where("cur_degree", "==", "MTECH"));
    // const querySnapshot2 = await getDocs(q2);
    // querySnapshot2.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.data())
    //   // console.log(doc.data())
    // });

    // to create users
    // try {
    //     // console.log("hello")
    //   const docRef = addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.log("Error adding document: ", e);
    // }

    // to get all users from table
    //     const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  };
//   var names = ["Jake", "Jon", "Thruster"];
//   var namesList = names.map(function (name) {
//     return <li>{name}</li>;
//   });

var namesList2 = data.map(function (res) {
    return <li>{res.name}</li>;
  });
console.log("DATTTAAAAA", data.length)
  return (
    <div>
      <ul>{namesList2}</ul> 
    </div>
  );
}
export { Print };
