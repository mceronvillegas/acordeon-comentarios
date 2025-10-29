import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import type { ProductTypes } from "../../types/ProductTypes";
import { getProducts } from "../../services/ProductServices";
import CartProduct from "../../components/CartProduct";

export default function Feed() {
    const navigation = useNavigate();
    const [products, setProducts] = useState<ProductTypes[]>([]);

    useEffect(() => {
        const datafetch = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        datafetch();
    }, []);

    return (
        <div id="feed-page" className="grid grid-cols-3 items-center">
            <h1>Bienvenido a mi tiendita</h1>
            <button onClick={() => navigation("/cart")} className="btn btn-secondary cursor-pointer bg-amber-700 hover:bg-amber-900">
                Mira tu carrito
            </button>
            <div id="individual-cart" className="grid grid-cols-3 items-center">
                {products.map((ProductIndividual: ProductTypes) => {
                    return <CartProduct key={ProductIndividual.id} ProductIndividual={ProductIndividual} />;
                })}
            </div>
        </div>
    );
}
