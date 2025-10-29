import { combineReducers } from "@reduxjs/toolkit"; // agrupar todas las pequeñas partes del estado global

const appReducer = combineReducers({});
export default appReducer;
export type RootState = ReturnType<typeof appReducer>;
