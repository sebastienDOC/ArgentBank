import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: '',
    loading: false,
    error: null
}

export const revertAll = createAction('REVERT_ALL')

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
        method: 'post',
        headers:{
            "Authorization":  `Bearer ${token}`
        }
    })
    return await response.json()
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        // GET PROFILE
        .addCase(getUserProfile.pending, (state) => {
            state.loading = true
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
            state.token = localStorage.getItem('token')
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        // SIGN IN
        .addCase(signInUser.pending, (state) => {
            state.loading = true
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            state.loading = false
            state.token = action.payload
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.loading = false
            if (action.error.message === 'Request failed with status code 400') {
                state.error = 'Access Denied ! Invalid email or password'
            } else {
                state.error = action.error.message
            }
        })
        // LOG OUT
        .addCase(revertAll, () => initialState)
    }
})

export default authSlice.reducer