import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeUser: null,
	professions: []
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
		updateProfessions(state, action) {
			state.professions = action.payload;
		}
	},
});

export default userSlice;
export const userActions = userSlice.actions;

