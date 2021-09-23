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
import { db, app } from "./firebase";
import { setDoc, Timestamp } from "firebase/firestore";
import { Firestore } from "@firebase/firestore";
import { async } from "@firebase/util";
import './chat.css'

function AddRoom() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [user, setUser] = useState([])


  useEffect(() => {
    getUser();
  }, [type]);

//   useEffect(() => {
//       if (user.length > 0 ){
//           console.log(user)
//       }
//   }, [])

  const getUser = async () => {
    //   console.log("typeeee", type)
    var temp = "";
    if (type == 1) {
      temp = "BTECH";
    } else {
      temp = "MTECH";
    }

    // console.log("tempppp", temp)

    const q = query(collection(db, "USERS"), where("cur_degree", "==", temp));
    var userTemp = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      userTemp.push(parseInt(doc.id));
    });
    setUser(userTemp)
  };

  console.log(user)


  function handlePress() {
    if (input.length > 0) {
      const data = {
        name: input,
        latestMessage: {
          text: `You have joined the room ${input}.`,
          createdAt: new Date().getTime(),
        },
        users: user,
      };
      const docRef = addDoc(collection(db, "THREADS"), data).then((res) =>
        addDoc(collection(res, "MESSAGES"), {
          text: `You have joined the room ${input}.`,
          createdAt: new Date().getTime(),
          system: true,
        })
      );
    }
  }

  function onChange(value) {
    setType(value);
  }

  console.log("Value", type);

  return (
    <div className="Chat">
      <label>Please specify the following details:</label>
      <input
        placeholder="Name of the chat room"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <br />
      <div className="radio" onChange={(e) => onChange(e.target.value)}>
        <input type="radio" value="1" name="SUBJECT" /> BTECH
        <input type="radio" value="2" name="SUBJECT" /> MTECH
      </div>

      <button onClick={() => handlePress()}>submit</button>
    </div>
  );
}

export default AddRoom;
