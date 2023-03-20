import { showAndHideMsg } from "../slices/uiSlice";
import { userActions } from "../slices/userSlice";

import sendRequest from "./common/sendRequest";

export const loginUser = function (formData, cb) {
	return async (dispatch) => {
		try {
			const data = await sendRequest("/auth/login", "POST", formData);
			dispatch(userActions.initUser(data));
			cb();
		} catch (error) {
			dispatch(
				showAndHideMsg(
					'error', "Error! A problem has been occurred. Wrong email or password."
				)
			);
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

			if (type === "value_error.email")
				dispatch(showAndHideMsg('error', "Error! Invalid email."));

			if (type === "value_error.any_str.min_length")
				dispatch(
					showAndHideMsg(
						'error', "Error! Password needs to have at least 8 characters."
					)
				);

			if (type === "value_error")
				dispatch(showAndHideMsg('error', `Error! ${msg}`));

			if (!type) dispatch(showAndHideMsg('error', `Error! ${err.detail}`));
		}
	};
};

export const getUserByToken = function () {
	return async (dispatch) => {
		try {
			const data = await sendRequest("/auth/token", "GET");
			dispatch(userActions.initUser(data));
		} catch (err) {}
	};
};
