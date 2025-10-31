// ✅ Importamos la función createSlice desde Redux Toolkit
// createSlice permite crear de forma sencilla un "slice" (una porción del estado global)
// junto con sus acciones y reducer automáticamente.
import { createSlice } from "@reduxjs/toolkit";
// ✅ Importamos el tipo PayloadAction usando "import type"
// Esto sirve para tipar correctamente las acciones en TypeScript
import type { PayloadAction } from "@reduxjs/toolkit";

// ✅ Importamos el tipo CommentType
// Este define la forma que tiene cada comentario (id, name, email, body, etc.)
import type { CommentType } from "../types/CommentTypes";

// ✅ Definimos el tipo del estado que manejará este slice
// En este caso, solo guardamos una lista (array) de comentarios
type CommentsState = {
    comments: CommentType[];
};

// ✅ Estado inicial del slice
// Comienza vacío porque todavía no hemos cargado los comentarios desde la API
const initialState: CommentsState = {
    comments: [],
};

// ✅ Creamos el slice (rebanada del estado global) llamado "comments"
const commentsSlice = createSlice({
    // Nombre del slice (sirve internamente para Redux)
    name: "comments",

    // Estado inicial del slice
    initialState,

    // ✅ Reducers: funciones que modifican el estado
    reducers: {
        // setComments → actualiza el estado con los comentarios recibidos
        // action.payload contiene la lista de comentarios (array)
        setComments: (state, action: PayloadAction<CommentType[]>) => {
            state.comments = action.payload; // actualiza el estado
        },
    },
});

// ✅ Exportamos las acciones generadas automáticamente por createSlice
// En este caso solo tenemos "setComments"
export const { setComments } = commentsSlice.actions;

// ✅ Exportamos el reducer del slice
// Este reducer será registrado en el store (store.ts)
export default commentsSlice.reducer;
