import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../models/user/IUser.ts";


type UserSliceType = {
    userByName: IUser[] | null,
    userById: {users: IUser[]} | null,
    users: IUser[]
}

const initialState: UserSliceType = {userByName: null, userById: null, users: []}

const getUsersByNameRedux =
    createAsyncThunk('userSlice/getUsersByNameRedux', async (name: string, thunkAPI) => {
        try {
            const userName = await fetch('https://dummyjson.com/users/search?q=' + name)
                .then(value => value.json())
            console.log(thunkAPI.fulfillWithValue(userName.userName))
            return thunkAPI.fulfillWithValue(userName.userName)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    });

const getUsersByIdRedux =
    createAsyncThunk('userSlice/getUsersByIdRedux', async (id: string, thunkAPI) => {
        const userId = await fetch('https://dummyjson.com/users/' + id)
            .then(value => value.json())
        console.log(thunkAPI.fulfillWithValue(userId))
        return thunkAPI.fulfillWithValue({users:[userId]})
    });

const getUsersRedux =
    createAsyncThunk('userSlice/getUsersRedux', async (page: string, thunkAPI) => {
        const users = await fetch('https://dummyjson.com/users?skip='+page)
            .then(value => value.json())
        console.log(thunkAPI.fulfillWithValue(users.users))
        return thunkAPI.fulfillWithValue(users.users)
    });

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUsersByNameRedux.fulfilled, (state, action) => {
                state.userByName = action.payload
            })
            .addCase(getUsersByIdRedux.fulfilled, (state, action) => {
                state.userById = action.payload;
            })
            .addCase(getUsersRedux.fulfilled, (state,action) => {
                state.users = action.payload;
            })
    }
});

export const userSliceActions = {
    ...userSlice.actions, getUsersByNameRedux, getUsersByIdRedux, getUsersRedux
}