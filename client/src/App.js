import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"
import UserProfile from "./UserProfile";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [journal, setJournal] = useState([]);
  const [mood, setMood] = useState([]);
  
  if(!user) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home mood={mood} setMood={setMood} journal={journal} setJournal={setJournal}/>} />
        <Route path="me" element={<UserProfile user={user}/>} />
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="signup" element={
          <Signup 
          username={username} 
          password={password}
          password_confirmation={password_confirmation}
          first_name={first_name}
          last_name={last_name}
          email={email}
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordConfirmation={setPasswordConfirmation}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setUser={setUser} 
          />} 
        />
      </Routes>
    </div>
  );
}

export default App;
