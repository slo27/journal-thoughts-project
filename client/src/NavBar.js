import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ setUser }) {
    const navigate = useNavigate();

    function handleSubmit() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            setUser();
        });
        navigate('/login');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="journal-navbar" />
                <Navbar.Collapse id="journal-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="mood">Mood Entry</Nav.Link>
                        <Nav.Link as={Link} to="journal">Journal Entry</Nav.Link>
                        <Nav.Link as={Link} to="usermood">My Entries</Nav.Link>
                        {/* <Nav.Link as={Link} to="userjournal">My Journals</Nav.Link> */}
                        <Nav.Link as={Link} to="me">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                        <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                        <Nav.Link onClick={handleSubmit}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

// {/* <span class="navbar-text">
//     Journal Your Thoughts
// </span> */}