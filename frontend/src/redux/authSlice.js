import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    loading: false,
    error: null,
}

export const signUpUser = createAsyncThunk('user/signUpUser', async (userInfos) => {
    const request = await axios.post('http://localhost:3001/api/v1/user/signup', userInfos)
    const response = await request.data
    return response
})

export const signInUser = createAsyncThunk('user/signInUser', async (userSignIn) => {
    const request = await axios.post('http://localhost:3001/api/v1/user/login', userSignIn)
    const response = await request.data
    const token = await request.data.body.token
    localStorage.setItem('user', JSON.stringify(response))
    localStorage.setItem('token', token)
    return (response && token)
})

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers:{
            "Authorization":  `Bearer ${token}`
        }
    })
    return await response.json()
})

export const changeUserName = createAsyncThunk('user/changeUserName', async (newUsername) => {
    const request = await axios.put('http://localhost:3001/api/v1/user/profile', newUsername, {headers: {"Authorization":  `Bearer ${localStorage.getItem('token')}`}})
    const response = await request.data
    return response
})

export const revertAll = createAction('REVERT_ALL')

const authSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        // SIGN UP 
        .addCase(signUpUser.pending, (state) => {
            state.loading = true
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        // SIGN IN
        .addCase(signInUser.pending, (state) => {
            state.loading = true
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.loading = false
            if (action.error.message === 'Request failed with status code 400') {
                state.error = 'Access Denied ! Invalid email or password'
            } else {
                state.error = console.log(action.error.message)
            }
        })
        // GET PROFILE
        .addCase(getUserProfile.pending, (state) => {
            state.loading = true
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        // CHANGE USERNAME
        .addCase(changeUserName.pending, (state) => {
            state.loading = true
        })
        .addCase(changeUserName.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        .addCase(changeUserName.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        // LOG OUT
        .addCase(revertAll, () => initialState)
    }
})

export default authSlice.reducer