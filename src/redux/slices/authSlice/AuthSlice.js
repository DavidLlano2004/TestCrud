import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    isLogged: false,
    is_active: false,
    name: "",
    rol: "",
    user: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginCase: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.is_active = action.payload.is_active;
            state.isLogged = true;
            state.user = action.payload.user;
            state.rol = action.payload.rol;
        },
        signOffCase: (state) => {
            state.email = initialState.email;
            state.name = initialState.name;
            state.is_active = initialState.is_active;
            state.isLogged = initialState.isLogged;
            state.user = initialState.user;
            state.rol = initialState.rol;
        },
    },
});


export const { loginCase, signOffCase } = authSlice.actions;
export default authSlice.reducer;
