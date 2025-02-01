import {configureStore} from "@reduxjs/toolkit";
import {recipeSlice} from "../redux/slices/recipe/recipeSlice.ts";
import {userSlice} from "../redux/slices/user/userSlice.ts";

export const store = configureStore({
    reducer: {
        recipeSlice: recipeSlice.reducer,
        userSlice: userSlice.reducer,
    }
})