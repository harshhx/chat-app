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
function MyFunctionalComponentFunction() {
  const [input, setInput] = useState(""); // '' is the initial state value

  function handlePress() {
    console.log(input);
    if (input.length > 0) {
      const data = {
        name: input,
        latestMessage: {
          text: `You have joined the room ${input}.`,
          createdAt: new Date().getTime(),
        },
        users: [2,5],
      };
      const docRef = addDoc(collection(db, "THREADS"), data).then((res) =>
        addDoc(collection(res, "MESSAGES"), {
          text: `You have joined the room ${input}.`,
          createdAt: new Date().getTime(),
          system: true,
        })
      );
      console.log(docRef);
      // const threadRef = collection(db, "THREADS" + docRef.id)
      // console.log()
      // const docRef2 = addDoc(collection(threadRef, "MESSAGES"), data2);
    }
    // if (input.length > 0) {
    //   db.collection("THREADS").set({
    //     name: "Frank",
    //     name: input,
    //     latestMessage: {
    //       text: `You have joined the room ${input}.`,
    //       createdAt: new Date().getTime(),
    //     },
    //     users: [1, 2, 5],
    //   })
    // }
  }

  return (
    <div>
      <label>Please specify:</label>
      <input value={input} onInput={(e) => setInput(e.target.value)} />
      <button onClick={() => handlePress()}>submit</button>
    </div>
  );
}
export default MyFunctionalComponentFunction;
