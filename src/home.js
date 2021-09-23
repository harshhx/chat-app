import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import GetRoomList from "./get_rooms_of_user";
import Chat from "./chat";
function Home() {
  return (
    <div className="app">
        {/* <div className="app_body">
            <GetRoomList /> 
            <Chat />
        </div> */}
       

      {/* <h1>
        <Link to="/roomlist">Room List of a User</Link>
      </h1>
      <h1>
        <Link to="/addroom">Create a new Room</Link>
      </h1> */}
    </div>
  );
}

export default Home;
