import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialState = {
	userId: null
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

			setTimeout(() => {dispatch(uiActions.clearErrors())}, 3000);
		}
	};
};

export const registerUser = function(formData) {
	return async dispatch => {
		try {
			const data = await sendRequest('/auth/register', formData);
			dispatch(userActions.initUser(data.userId));
		} catch(err) {
			console.log(err);
			const {type, msg} = err.detail.at(-1);

			if (type === "value_error.email") {
				dispatch(uiActions.createError("Error! Invalid email."))
				setTimeout(() => {dispatch(uiActions.clearErrors())}, 3000);
			}

			if (type === "value_error.any_str.min_length") {
				dispatch(uiActions.createError("Error! Password needs to have at least 8 characters."))
				setTimeout(() => {dispatch(uiActions.clearErrors())}, 3000);
			}

			if (type === 'value_error') {
				dispatch(uiActions.createError(`Error! ${msg}`));
				setTimeout(() => {dispatch(uiActions.clearErrors())}, 3000);
			}

			if (!type) {
				dispatch(uiActions.createError(`Error! ${err.detail}`));
				setTimeout(() => {dispatch(uiActions.clearErrors())}, 3000);
			}
		}
	}
}
