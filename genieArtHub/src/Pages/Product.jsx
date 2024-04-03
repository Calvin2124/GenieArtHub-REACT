import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import LogoPanier from "../Components/LogoPanier";

function Product() {
    const { productId } = useParams();
    const [datas, setDatas] = useState(null); // Initialisez à null pour indiquer que les données ne sont pas encore chargées
    const [currentIndex, setCurrentIndex] = useState(0); // Initialisez à un index par défaut approprié
    useEffect(() => {
        const fetchProduct = async () => {
            const linkAPI = `http://localhost:3000/api/products/` + productId;
            try {
                const req = await fetch(linkAPI);
                const res = await req.json();
                setDatas(res);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, [productId]); // Assurez-vous que useEffect se déclenche à chaque changement de productId

    // Fonction de gestion de la sélection de l'option
    const handleChangeOption = (e) => {
        setCurrentIndex(e.target.selectedIndex);
    };

    // Rendu conditionnel en attendant le chargement des données
    if (!datas) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <LogoPanier />
            <section className="detailoeuvre">
                <article>
                    <figure>
                        <img src={datas.image} alt={datas.titre} />
                    </figure>
                    <div>
                        <h1>{datas.titre}</h1>
                        <p>{datas.description?.slice(0, 200)}...</p>
                        <div className="price">
                            <p>Acheter pour</p>
                            <span className="showprice">{datas.declinaisons[currentIndex] && datas.declinaisons[currentIndex].prix}€</span>
                        </div>
                        <div className="declinaison">
                            <input type="number" name="quantity" id="quantity" placeholder="1" min="1" />
                            <select name="format" id="format" onChange={handleChangeOption}>
                                {datas.declinaisons.map((item, index) => (
                                    <option key={index} value={item.taille}>Format : {item.taille}</option>
                                ))}
                            </select>
                        </div>
                        <Link className="button-buy" to="#">Buy {datas.shorttitle}</Link>
                    </div>
                </article>

                <aside>
                    <h2>Description de l’oeuvre : {datas.titre}</h2>
                    <p>{datas.description}</p>
                </aside>
            </section>
            <Footer />
        </>
    );
}

export default Product;
