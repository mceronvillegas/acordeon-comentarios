import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CommentType } from "../types/CommentTypes";

type CommentsState = {
    comments: CommentType[];
};

const initialState: CommentsState = {
    comments: [],
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<CommentType[]>) => {
            state.comments = action.payload;
        },
    },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
