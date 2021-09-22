// import Avatar from '@chatscope/chat-ui-kit-react/dist/cjs/Avatar'
import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
function SidebarChat({ addNewChat }) {
    
    let r = (Math.random() + 1).toString(36).substring(7);
    return !addNewChat? (
        <div className="sidebarChat">
            <Avatar src={"https://avatars.dicebear.com/api/human/"+r+".svg"} />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last message....</p>
            </div>
        </div>
    ): (
        <div className="sidebarChat">
            <h2>Create new Room</h2>
        </div>
    );
}

export default SidebarChat
