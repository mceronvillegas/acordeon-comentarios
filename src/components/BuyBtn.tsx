import { useDispatch } from "react-redux";

import type { ProductTypes } from "../types/ProductTypes";
import { addProduct } from "../reducers/CartSlice";

type CardProductProps = {
    ProductIndividual: ProductTypes;
};

export default function BuyBtn({ ProductIndividual }: CardProductProps) {
    const dispatch = useDispatch();

    function handleButton() {
        dispatch(addProduct(ProductIndividual));
    }

    return (
        <div>
            <button onClick={handleButton} className="mt-auto bg-blue-200 text-blue-900 font-medium py-2 px-5 rounded-xl hover:bg-blue-300 transition-colors">
                Añadir al carrito
            </button>
        </div>
    );
}
