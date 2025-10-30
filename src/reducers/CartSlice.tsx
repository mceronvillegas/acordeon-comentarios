import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ProductTypes } from "../types/ProductTypes";

type cartState = {
    cart: ProductTypes[];
};
//tipar el estado inicial para que solo acepte ese tipo de informacion

const initialState: cartState = {
    cart: [],
};
//Se coloca ese tipado al estado inicial para que se apliquen todas las propiedades de los tipados

const CartSlice = createSlice({
    name: "slice",
    initialState, //Estado inicial del slice, aqui se declara como quiero que empiece la accion. El carrito comienza vacio

    reducers: {
        addProduct: (state, action: PayloadAction<ProductTypes>) => {
            state.cart = [...state.cart, action.payload]; //aqui estoy enviando la informacion con la accion que quiero que se haga
        },
    },
});

export const { addProduct } = CartSlice.actions;
export default CartSlice.reducer;
//exportar accion de add product
//exportar todo el reducer
