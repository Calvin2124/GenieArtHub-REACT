import { Link } from "react-router-dom";
import { useDatas } from "../Datas/Datas";
import logo_black from "../img/logo-black.png"
import cart from "../img/cart.svg"

function HomeContent() {
    const datas = useDatas();
    return (
        <>
            <section className="hero">
        <div className="row">
            <h1>Explorez l'AI-magination artistique</h1>
            <Link to="#aiartshop">AI Art Shop</Link>
        </div>
    </section>

    <section id="aiartshop" className="productlist">
        <div>
            <img src={logo_black} alt="Logo GeniArtHub version sombre"/>
            <Link id="carticon" to="#"><img src={cart} alt="Aller au panier"/></Link >
        </div>
        <section className="products">
            {datas.map((data, index) => (
                <Article key={index} data={data} />
            ))}
        </section>
    </section>
        </>
    )
}

function Article({ data }) {
    const pathId = "/product/" + data._id 
    return (
        <article>
            <img src={data.image} alt={data.title} />
            <Link to={pathId}>Buy {data.shorttitle}</Link>
        </article>
    );
}

export default HomeContent;