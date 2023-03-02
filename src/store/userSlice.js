import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialState = {
	userId: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		initUser(state, action) {
			state.userId = action.payload;
		},
	},
});

export default userSlice;

export const userActions = userSlice.actions;

async function sendRequest(url, body) {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const data = await res.json();
		if (!res.ok) 
			throw data;

		return data;
}

export const loginUser = function (formData) {
	return async dispatch => {
		try {
			const data = await sendRequest("/auth/login", formData);
			dispatch(userActions.initUser(data.userId));
		} catch(error) {
			dispatch(uiActions.createError('Error! A problem has been occurred. Wrong email or password.'));

			setTimeout(() => {dispatch(uiActions.clearErrors())}, 5000);
		}
	};
};

export const registerUser = function(formData) {
	return async dispatch => {
		const data = await sendRequest('/auth/register', formData);
		dispatch(userActions.initUser(data.userId));
	}
}
