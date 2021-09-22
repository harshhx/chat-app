import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        <Link to="/roomlist">Room List of a User</Link>
      </h1>
      <h1>
        <Link to="/addroom">Create a new Room</Link>
      </h1>
    </div>
  );
}

export default Home;
