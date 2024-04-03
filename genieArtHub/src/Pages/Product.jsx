import { Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import LogoPanier from "../Components/LogoPanier";

function Product(){
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const productId = searchParams.get("productId")
    const [datas, setDatas] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const linkAPI = `http://localhost:3000/api/products/` + productId
            try {
                const req = await fetch(linkAPI);
                const res = await req.json();
                setDatas(res); // Pas besoin de mettre res dans un tableau
            } catch (err) {
                console.error(err);
            }
        }
        fetchProduct()
    }, [])
    console.log(datas)
    return (
        <>
        <LogoPanier/>
        <section className="detailoeuvre">
        <article>
            <figure>
                <img src={datas.image}alt={datas.titre}/>
            </figure>
            <div>
                <h1>{datas.titre}</h1>
                <p>{datas.description.substring(0, 207)}...</p>
                <div className="price">
                    <p>Acheter pour</p>
                    <span className="showprice">35.25€</span>
                </div>
                <div className="declinaison">
                    <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1"/>
                    <select name="format" id="format">
                    </select>
                </div>
                <Link className="button-buy" to="#">Buy {datas.shorttitle}</Link>
            </div>
        </article>

        <aside>
            <h2>Description de l’oeuvre :  Éclat Éthéré : Bird</h2>
            <p>{datas.description}</p>
        </aside>
        
    </section>
        <Footer />
        </>
    )
}

export default Product;