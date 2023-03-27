import logo from "../assets/Logo .svg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little lemon logo" />
      <section>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
      </section>
      <section>
        123, Baker Street<br />
        New York<br />
        233-445<br />
        +78 787-899-989<br />
        littlelemon@yopmail.com<br />
      </section>
      <section>
        <ul>
            <li><a href=""><FacebookIcon /></a></li>
            <li><a href=""><InstagramIcon /></a></li>
            <li><a href=""><TwitterIcon /></a></li>
            <li><a href=""><RedditIcon /></a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
