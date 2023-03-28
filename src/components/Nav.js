import "./Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
        <button><MenuIcon /></button>
        <ul>
            <li><Link to="/" path="relative">Home</Link></li>
            <li><Link to="/bookatable" path="relative">Book a table</Link></li>
            <li><Link to="/chicago" path="relative">About</Link></li>
            <li><Link to="/specials" path="relative">Menu</Link></li>
            <li><Link to="/testimonials" path="relative">Testimonials</Link></li>
        </ul>
      
    </nav>
  )
}

export default Nav
