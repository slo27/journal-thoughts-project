import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

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
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-md-12">
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
                <div className="form-group col-md-12">
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
                <br/>
                <div className="text-center">
                    <button type="submit" class="btn btn-dark">Login</button>
                </div>
                <div className="signup-wrapper">
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;