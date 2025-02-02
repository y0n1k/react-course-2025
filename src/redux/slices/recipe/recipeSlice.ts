import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


type RecipeSliceType = {
    recipeName: {recipes:IRecipe[]} | null,
    recipeId: IRecipe[] | null,
    recipes: IRecipe [],
    recipeUserId: IRecipe[] | null,
    recipesTag: {recipes:IRecipe[]} | null
}

const initialState: RecipeSliceType = {recipeName: null, recipeId: null, recipes: [], recipeUserId: null, recipesTag: null}

const getRecipesByNameRedux =
    createAsyncThunk('recipeSlice/getRecipesByNameRedux', async (name: string, thunkAPI) => {
        try {
            const recipeName = await fetch('https://dummyjson.com/recipes/search?limit=50&q=' + name)
                .then(value => value.json())
            console.log(thunkAPI.fulfillWithValue(recipeName))
            console.log(thunkAPI.fulfillWithValue(recipeName))
            return thunkAPI.fulfillWithValue(recipeName)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    });

const getRecipesByIdRedux =
    createAsyncThunk('recipeSlice/getRecipesByIdRedux', async (id: string, thunkAPI) => {
        const recipeId = await fetch('https://dummyjson.com/recipes/' + id)
            .then(value => value.json())
        console.log(thunkAPI.fulfillWithValue(recipeId))
        return thunkAPI.fulfillWithValue(recipeId)
    });

const getRecipesRedux =
    createAsyncThunk('recipeSlice/getRecipesRedux', async (page: string, thunkAPI) => {
        const recipes = await fetch('https://dummyjson.com/recipes?skip=' + page)
            .then(value => value.json())
        console.log(thunkAPI.fulfillWithValue(recipes.recipes))
        return thunkAPI.fulfillWithValue(recipes.recipes)
    });

const getRecipesByUserIdRedux =
    createAsyncThunk('recipeSlice/getRecipesByUserIdRedux', async (userId: string, thunkAPI) => {
        const recipeUserId = await fetch('https://dummyjson.com/recipes?limit=50')
            .then(value => value.json())
            .then(data => data.recipes.filter((recipe:IRecipe) => recipe.userId.toString() === userId))
        console.log(thunkAPI.fulfillWithValue(recipeUserId))
        return thunkAPI.fulfillWithValue(recipeUserId)
    });

const getRecipesByTagRedux =
    createAsyncThunk('recipeSlice/getRecipesByTagRedux', async (tag: string, thunkAPI) => {
        const recipeTag = await fetch('https://dummyjson.com/recipes/tag/' + tag)
            .then(value => value.json())
        console.log(thunkAPI.fulfillWithValue(recipeTag))
        return thunkAPI.fulfillWithValue(recipeTag)
    });

export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getRecipesByNameRedux.fulfilled, (state, action) => {
                state.recipeName = action.payload
            })
            .addCase(getRecipesByIdRedux.fulfilled, (state, action) => {
                state.recipeId = action.payload;
            })
            .addCase(getRecipesRedux.fulfilled, (state,action) => {
                state.recipes = action.payload;
            })
            .addCase(getRecipesByUserIdRedux.fulfilled, (state, action) => {
                state.recipeUserId = action.payload;
        })
            .addCase(getRecipesByTagRedux.fulfilled, (state, action) => {
                state.recipesTag = action.payload
            })
    }
});

export const recipeSliceActions = {
    ...recipeSlice.actions, getRecipesByNameRedux, getRecipesByIdRedux, getRecipesRedux, getRecipesByUserIdRedux, getRecipesByTagRedux
}