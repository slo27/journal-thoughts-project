import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"
import UserProfile from "./UserProfile";
import CreateMood from "./CreateMood";
import CreateJournal from "./CreateJournal";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [journals, setJournals] = useState([]);
  const [moods, setMoods] = useState([]);
  const [description, setDescription] = useState([]);
  const [content, setContent] = useState([]);

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/usermood" element={<Home setUser={setUser} setMoods={setMoods} />} />
        <Route path="/journal" element={<CreateJournal setUser={setUser} journals={journals} setJournals={setJournals} content={content} setContent={setContent}/>} />
        <Route path="/mood" element={<CreateMood setUser={setUser} moods={moods} setMoods={setMoods} description={description} setDescription={setDescription}/>} />
        <Route path="me" element={<UserProfile user={user} />} />
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="/" element={
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
