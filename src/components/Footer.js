import footerImg from "../assets/logo-footer.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <div className="content">
            <img src={footerImg} alt="Little lemon logo" />
            <section>
                <ul>
                    <li><Link to="/" path="relative">Home</Link></li>
                    <li><Link to="/chicago" path="relative">About</Link></li>
                    <li><Link to="/specials" path="relative">Menu</Link></li>
                    <li><Link to="/testimonials" path="relative">Testimonials</Link></li>
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
        </div>
    </footer>
  )
}

export default Footer
