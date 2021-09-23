// import Avatar from "@chatscope/chat-ui-kit-react/dist/cjs/Avatar";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  getDocs,
  where,
  onSnapshot,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import "./get_rooms_of_user.css";
import DonutLargeSharpIcon from "@mui/icons-material/DonutLargeSharp";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import ChatSharp from "@mui/icons-material/ChatSharp";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

function GetRoomList() {
  const [message, setMessage] = React.useState("");
  const [list, setData] = React.useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "THREADS"),
      where("users", "array-contains", 1)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push([doc.data(), doc.id]);
      });
      setData(temp);
    });
    return ()=>{
      unsubscribe();
    }
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const test = [];
  //   const q = query(
  //     collection(db, "THREADS"),
  //     where("users", "array-contains", 1)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   // console.log(querySnapshot);
  //   querySnapshot.forEach((doc) => {
  //     test.push([doc.data(), doc.id]);
  //   });
  //   // console.log("Test is ", test);
  //   setData(test);
  //   setMessage("Test Message");
  // };
  // useEffect(() => {
  //   if (list.length >0){
  //   const sample = list[0]
  //   console.log(sample)
  // }
  // }, [list])

  // var roomlist = list.map(function (res) {
  //   return <li>{res.name}</li>;
  // });
  console.log(list);

  return (
    <div className="sidebar">
      {/* <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeSharpIcon />
            <ChatSharp />
            <MoreVertSharpIcon />
          </IconButton>
        </div>
      </div> */}
      <div className="sidebar_search">
        <h3>Welcome to GetWork</h3>
        {/* <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div> */}
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />

        {list.map((res) => (
          <SidebarChat
            key={res[1]}
            id={res[1]}
            name={res[0].name}
            latestMessage={res[0].latestMessage.text}
          />
        ))}
      </div>
    </div>

    // <div className="app_body">
    //   {list.map((res) =>
    //     <div>
    //       {/* {console.log(res)}
    //       <h1>{res[0].name}</h1> */}
    //       <Link to={`/${res[1]}`}> {res[0].name}</Link>

    //       {/* <h1><a href={`/${res[1]}`}>{res[0].name}</a></h1> */}
    //       {/* <h1><a href={`/${res[1]}`}>{res[0].name}</a></h1> */}
    //     </div>
    //   )}
    // </div>
  );
}

export default GetRoomList;
