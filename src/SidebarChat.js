// import Avatar from '@chatscope/chat-ui-kit-react/dist/cjs/Avatar'
import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat, latestMessage }) {
  let r = (Math.random() + 1).toString(36).substring(7);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={"https://avatars.dicebear.com/api/human/" + r + ".svg"} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{latestMessage}</p>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={`/addRoom`}>
    <div>
      <div className="sidebarChat">
        <h2>Add new Chat</h2>
      </div>
    </div>
    </Link>

  );
}

export default SidebarChat;
