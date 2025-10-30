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
        <div id="feed-page" className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-10 px-6">
            {/* Encabezado */}
            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl mb-10 gap-4">
                <h1 className="text-3xl font-semibold text-blue-800">Bienvenido a mi tiendita 🩵</h1>
                <button onClick={() => navigation("/cart")} className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-all duration-300">
                    Mira tu carrito 🛒
                </button>
            </div>

            {/* Grid de productos */}
            <div id="individual-cart" className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
                {products.map((ProductIndividual: ProductTypes) => (
                    <CartProduct key={ProductIndividual.id} ProductIndividual={ProductIndividual} />
                ))}
            </div>
        </div>
    );
}
