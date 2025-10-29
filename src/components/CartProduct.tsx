import type { ProductTypes } from "../types/ProductTypes";

type CardProductProps = {
    ProductIndividual: ProductTypes;
};

function CartProduct({ ProductIndividual }: CardProductProps) {
    return (
        <div className="max-w-sm bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col items-center text-center">
            <img src={ProductIndividual.image} alt={ProductIndividual.title} className="w-32 h-32 object-contain mb-4 rounded-xl bg-blue-50 p-3" />
            <h3 className="text-lg font-semibold text-blue-900 mb-1">{ProductIndividual.title}</h3>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{ProductIndividual.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-4">${ProductIndividual.price.toFixed(2)}</p>
            <div className="flex items-center gap-1 text-yellow-500 mb-2">
                <span className="text-sm text-gray-400">
                    ⭐ {ProductIndividual.rating.rate} ({ProductIndividual.rating.count})
                </span>
            </div>
            <button className="mt-auto bg-blue-200 text-blue-900 font-medium py-2 px-5 rounded-xl hover:bg-blue-300 transition-colors">Añadir al carrito</button>
        </div>
    );
}

export default CartProduct;
