import "./NavBarStyle.css";
/* */
import CartWidget from "./CartWidget/CartWidget";

import Logo from "../../assets/img/drop-store115-small.png"

export default function NavBar(){
    return(
        <nav>
            <ul>
                <img src={Logo} className="logo"/>
                <li><a href="#zapas">JORDAN</a></li>
                <li><a href="#air">AIR</a></li>
                <li><a href="#superior">UPPERS</a></li>
                <li><a href="#pants">PANTS</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}