// ✅ Importamos la función configureStore desde Redux Toolkit
// Esta función nos permite crear fácilmente el "store" (almacenamiento global del estado)
import { configureStore } from "@reduxjs/toolkit";

// ✅ Importamos el reducer de los comentarios
// Este reducer viene del archivo commentsSlice.ts y maneja la lógica de los comentarios
import commentsReducer from "./commentsSlice";

// ✅ Creamos el store principal de la aplicación
// Aquí es donde registramos todos los "slices" (rebanadas de estado global)
export const store = configureStore({
    reducer: {
        comments: commentsReducer, // 👈 Estado global "comments" controlado por commentsSlice
    },
});

// ✅ Tipado para TypeScript

// RootState → Representa la forma completa del estado global de la app
// (Es útil cuando usamos useSelector para leer datos del store)
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch → Representa el tipo de la función dispatch()
// (Sirve para despachar acciones con tipado correcto en Redux)
export type AppDispatch = typeof store.dispatch;
