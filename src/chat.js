import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  TypingIndicator,
  MessageSeparator,
  InputToolbox,
  SendButton,
  AttachmentButton,
} from "@chatscope/chat-ui-kit-react";
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
import { async } from "@firebase/util";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Chat() {
  let { id } = useParams();
  const [input, setInput] = useState("");
  const [docId, setId] = useState("");
  const [docData, setData] = useState({});
  const [messages, setMessage] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getThreadInfo();
  }, [id]);

  useEffect(() => {
    if (docId){
    getAllMessages();
    }
  }, [docId, id, seconds]);



  const getAllMessages = async () => {
    const temp = [];
    // console.log("HEYGBYYBYB" , docId)
    const querySnapshot = await getDocs(collection(db,"THREADS",docId,"MESSAGES"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      temp.push(doc.data())
    });
    // console.log(temp)
    setMessage(temp)
  };

  useEffect(() => {
    console.log(messages)
  }, [])

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const getThreadInfo = async () => {
    const q = query(
      collection(db, "THREADS"),
      where("__name__", "==", id)
    );
    const querySnapshot = await getDocs(q);
    // console.log("ttttttttttttttttttttt", querySnapshot)
    // setQuerry(temp)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsz
      // console.log("object");
      setData(doc.data());
      setId(doc.id);
      // console.log(doc.id, " => ", doc.data());
      // console.log(doc)
    });
  };

  const handlePress = async () => {
    console.log(input);
    const data = {
      text: input,
      createdAt: new Date().getTime(),
      system: true,
      sentBy: 1,
    }
    var temp2 = [...messages]
    temp2.push(data)
    setMessage(temp2)


    const docRef = addDoc(collection(db, "THREADS", docId, "MESSAGES"), data);
  };
  useEffect(() => {
    console.log(docId);
  }, [docId]);

  useEffect(() => {
    console.log(docData);
  }, [docData]);

  

  return (
    <div>
      <div
        style={{
          height: "500px",
          overflow: "hidden",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message)=>
                <Message
                model={{
                  message: message.text,
                  sentTime: message.createdAt,
                  sender: message.sentBy,
                  
                  direction: message.sentBy === 1? "outgoing": "incoming",
                  position: "single",
                }}
              ></Message>
              )}
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "15 mins ago",
                  sender: "Eliot",
                  direction: "incoming",
                  position: "single",
                }}
              ></Message>
            </MessageList>
          </ChatContainer>
        </MainContainer>
      </div>

      <input value={input} onInput={(e) => setInput(e.target.value)} />
      <button onClick={() => handlePress()}>submit</button>
    </div>
  );
}

export default Chat;
