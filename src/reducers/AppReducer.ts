import { combineReducers } from "@reduxjs/toolkit";

// agrupar todas las pequeñas partes del estado global
import reducer from "./CartSlice";

const appReducer = combineReducers({
    CartReducer: reducer,
});
export default appReducer;
export type RootState = ReturnType<typeof appReducer>;
