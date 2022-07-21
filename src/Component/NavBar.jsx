import {Link} from 'react-router-dom';
import "./Nav.scss";

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-md navo'>
            <Link to="/" className="navbar-brand logo navo_logo">money4arab</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon navo_icon"></span>
            </button>
            
            <div className="collapse navbar-collapse navo_box" id="navbarTogglerDemo01">
               <ul className="navbar-nav ms-auto fcenter">
               <li className="nav-item">
                 <Link to="/freelance" className="nav-link">العمل الحر</Link>
               </li>
               <li className="nav-item">
                 <Link to="/web" className="nav-link">الربح من المواقع</Link>
               </li>
               <li className="nav-item">
                 <Link to="/mobile" className="nav-link">الربح من تطبيقات</Link>
               </li>
               <li className="nav-item">
                 <Link to="/" className='nav-link'>الرئيسية</Link>
               </li>
               </ul>
               </div>
        </nav>
    )
}

export default NavBar;