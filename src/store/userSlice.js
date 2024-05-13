import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {users: []};

// users data managed
const userSlice = createSlice({
    name: "users",
    initialState: initialUserState,
    reducers: {
        renewUsers(state) {
            state.users = [];
        },
        addUsers(state, action) {
            state.users = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;