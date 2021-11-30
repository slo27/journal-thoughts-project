import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import UserProfile from "./UserProfile";

function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [journal, setJournal] = useState([]);
  const [mood, setMood] = useState([]);
  

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<UserProfile />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
