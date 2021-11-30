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
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password-confirmation">Password Confirmation</label>
                <input 
                    type="password"
                    id="password-confirmation"
                    autoComplete="off"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    id="first_name"
                    autoComplete="off"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">Signup</Button>
            </form>
        </>
    )
}

export default Signup;