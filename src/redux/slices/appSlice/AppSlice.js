import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

export const ProjectSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        getUsersSlice: (state, action) => {
            state.users = action.payload
        },
        addUserSlice: (state, action) => {
            state.users.push(action.payload);
        },
        updateUserSlice: (state, action) => {
            const { phone, updatedData } = action.payload;
            const userIndex = state.users.findIndex(user => user.phone === phone);
            
            if (userIndex !== -1) {
                state.users[userIndex] = {
                    ...state.users[userIndex],
                    ...updatedData,
                };
            }
        },
        deleteUserSlice: (state, action) => {
            const phone = action.payload;
            state.users = state.users.filter(user => user.phone !== phone);
        },
        resetUsersSlice: (state)=>{
            state.users = [];
        }
    }
})
export const {
    getUsersSlice,
    addUserSlice,
    updateUserSlice,
    deleteUserSlice,
    resetUsersSlice


} = ProjectSlice.actions

export default ProjectSlice.reducer

