import { Link } from "react-router-dom";
import logo_white from "../img/logo-white.png"
import "../Styles/Header.css"

function Header(){
    return(
        <>
            <header>
        <div className="row">
            <Link to="/">
            <img src={logo_white} alt="Logo du site GeniArtHub"/>
        </Link>
        </div>
    </header>
        </>
    )
}
export default Header;