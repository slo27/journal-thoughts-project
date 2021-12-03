import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) { 
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-group col-md-3">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        autoComplete="off"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-outline-dark">Login</button>
            </form>
        </div>
    )
}

export default Login;