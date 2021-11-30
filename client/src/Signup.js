import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
        navigate('/');
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="username"
                            autoComplete="off"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div class="form-group col-md-3">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="email"
                            autoComplete="off"
                            value={email}
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            class="form-control"
                            id="password"
                            autoComplete="off"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <div class="form-group col-md-3">
                        <label htmlFor="password-confirmation">Password Confirmation</label>
                        <input 
                            type="password"
                            class="form-control"
                            id="password-confirmation"
                            autoComplete="off"
                            value={password_confirmation}
                            placeholder="Password Confirmation"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label htmlFor="first_name">First Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="first_name"
                            autoComplete="off"
                            value={first_name}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                    </div>
                    <div class="form-group col-md-3">
                        <label htmlFor="last_name">Last Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="last_name"
                            autoComplete="off"
                            value={last_name}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                </div>
                {/* button is reverting to primary on refresh? */}
                <Button type="submit" class="btn btn-outline-dark">Sign Up</Button>
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