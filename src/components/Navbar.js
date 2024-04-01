import { Link } from 'react-router-dom';
import '../style/Navbar.css'

function Navbar() {
    return (
        <div id='navbar'>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
    );
}

export default Navbar;