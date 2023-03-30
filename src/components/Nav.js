import "./Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
function Nav() {
  const [navShown, setNavShown] = useState(false);
  const listRef = useRef();
  const toggleMenu = () => {
    setNavShown(!navShown)
    listRef.current.classList.value ='';
    if(navShown){
      listRef.current.classList.value ='clicked';
    }
  }
  return (
    <nav>
        <button onClick={toggleMenu}><MenuIcon /></button>
        <ul ref={listRef}>
            <li><Link to="/" path="relative">Home</Link></li>
            <li><Link to="/chicago" path="relative">About</Link></li>
            <li><Link to="/specials" path="relative">Menu</Link></li>
            <li><Link to="/bookatable" path="relative">Reservations</Link></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
      
    </nav>
  )
}

export default Nav
