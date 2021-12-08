import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup(props) {
    const navigate = useNavigate();
    const { 
        username, 
        password,
        password_confirmation,
        first_name,
        last_name,
        email,
        setUsername,
        setPassword,
        setPasswordConfirmation,
        setFirstName,
        setLastName,
        setEmail,
        setUser
    } = props;

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username,
                password,
                password_confirmation,
                first_name,
                last_name,
                email
            }),
        }).then((r) => {
            if (r.created) {
                r.json().then((userData) => setUser(userData));
            }
        });
        e.target.reset();
        navigate('/');
    }

    
    return (
        <div className="signup-wrapper">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div class="form-group col-md-12">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="email"
                            autoComplete="off"
                            value={email}
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            autoComplete="off"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="password-confirmation">Password Confirmation</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password-confirmation"
                            autoComplete="off"
                            value={password_confirmation}
                            placeholder="Password Confirmation"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="first_name">First Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="first_name"
                            autoComplete="off"
                            value={first_name}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="last_name">Last Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="last_name"
                            autoComplete="off"
                            value={last_name}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <button type="submit" className="btn btn-dark">Sign Up</button>
                </div>
                <div className="login-wrapper">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signup;


// constructor (props) {
//     super(props);
//     this.state = { 
//         updateable: false,
//         name: props.name,
//         status: props.status
//     },
// }