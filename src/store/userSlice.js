import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

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

async function sendRequest(url, request, body) {
	const res = await fetch(url, {
		method: request,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: body ? JSON.stringify(body) : null
	});
	const data = await res.json();
	if (!res.ok) throw data;

	return data;
}

export const loginUser = function (formData, cb) {
	return async (dispatch) => {
		try {
			const data = await sendRequest("/auth/login", "POST", formData);
			dispatch(userActions.initUser(data));
			cb();
		} catch (error) {
			dispatch(
				uiActions.createError(
					"Error! A problem has been occurred. Wrong email or password."
				)
			);

			setTimeout(() => {
				dispatch(uiActions.clearErrors());
			}, 3000);
		}
	};
};

export const logoutUser = function () {
	return async (dispatch) => {
		await sendRequest("/auth/logout", "POST");
		dispatch(userActions.removeUser());
	};
};

export const registerUser = function (formData, cb) {
	return async (dispatch) => {
		try {
			await sendRequest("/auth/register", "POST", formData);
			cb();
		} catch (err) {
			const { type, msg } = err.detail.at(-1);

			if (type === "value_error.email") {
				dispatch(uiActions.createError("Error! Invalid email."));
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
			}

			if (type === "value_error.any_str.min_length") {
				dispatch(
					uiActions.createError(
						"Error! Password needs to have at least 8 characters."
					)
				);
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
			}

			if (type === "value_error") {
				dispatch(uiActions.createError(`Error! ${msg}`));
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
			}

			if (!type) {
				dispatch(uiActions.createError(`Error! ${err.detail}`));
				setTimeout(() => {
					dispatch(uiActions.clearErrors());
				}, 3000);
			}
		}
	};
};

export const getUserByToken = function() {
	return async dispatch => {
		try {
			const data = await sendRequest('/auth/token', 'GET');
			dispatch(userActions.initUser(data));
		} catch(err) {
		}
	}
}
