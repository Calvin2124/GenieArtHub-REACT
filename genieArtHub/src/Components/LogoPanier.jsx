import logo_black from "../img/logo-black.png"
import cart from "../img/cart.svg"
import { Link } from "react-router-dom";
function LogoPanier() {
    return (
        <div>
            <img src={logo_black} alt="Logo GeniArtHub version sombre"/>
            <Link id="carticon" to="#"><img src={cart} alt="Aller au panier"/></Link >
        </div>
    )
}
export default LogoPanier;