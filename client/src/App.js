import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"
import UserProfile from "./UserProfile";
import CreateMood from "./CreateMood";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [journal, setJournal] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState({content: ' '})
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState({description: ' '});

  // const createMood = (e, newMoodData) => {
  //   e.preventDefault();
  //   fetch(`/moods/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type" : "application/json",
  //     },
  //     body: JSON.stringify({
  //       "description": newMoodData.description
  //     })
  //   }).then(() => newMoodData())
  // }, [id]

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<Home setUser={setUser} moods={moods} setMoods={setMoods} journal={journal} />} />
        <Route path="/mood" element={<CreateMood />} />
        <Route path="me" element={<UserProfile />} />
        <Route exact path="login" element={<Login setUser={setUser}/>} />
        <Route exact path="signup" element={
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
