import { Link } from "react-router-dom";
import { useDatas } from "../Datas/Datas";
import LogoPanier from "./LogoPanier";

function HomeContent() {
    const datas = useDatas();
    console.log(datas)
    return (
        <>
            <section className="hero">
        <div className="row">
            <h1>Explorez l'AI-magination artistique</h1>
            <Link to="#aiartshop">AI Art Shop</Link>
        </div>
    </section>

    <section id="aiartshop" className="productlist">
        <LogoPanier />
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
    const pathId = "/product?productId=" + data._id 
    return (
        <article>
            <img src={data.image} alt={data.title} />
            <Link to={pathId}>Buy {data.shorttitle}</Link>
        </article>
    );
}

export default HomeContent;