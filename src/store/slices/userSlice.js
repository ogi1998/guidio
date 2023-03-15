import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		initUser(state, action) {
			state.activeUser = action.payload;
		},
		removeUser(state) {
			state.activeUser = null;
		},
	},
});

export default userSlice;
export const userActions = userSlice.actions;

