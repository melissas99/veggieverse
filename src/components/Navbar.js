import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
    );
}

export default Navbar;