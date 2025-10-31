import { createSlice } from "@reduxjs/toolkit";

import type { CommentType } from "../types/CommentTypes";

type CommentsState = {
    comments: CommentType[];
    favorites: number[];
};

// 🔹 Cargamos favoritos desde LocalStorage si existen
const initialFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

const initialState: CommentsState = {
    comments: [],
    favorites: initialFavorites,
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        // Guarda los comentarios obtenidos de la API
        setComments: (state, action) => {
            state.comments = action.payload;
        },

        // Añade o quita un comentario de los favoritos
        toggleFavorite: (state, action) => {
            const id = action.payload;
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter((favId) => favId !== id);
            } else {
                state.favorites.push(id);
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { setComments, toggleFavorite } = commentsSlice.actions;
export default commentsSlice.reducer;
