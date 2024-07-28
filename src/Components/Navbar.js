import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="#" className="navbar-brand">Book Store</Link>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/addnew" className="nav-link">Add New</Link>
                    </div>
                    <div className="navbar-nav navbar-right">
                        <Link to="/signup" className="nav-link"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                        <Link to="/login" className="nav-link"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;