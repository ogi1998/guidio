import { showAndHideMsg } from "../slices/uiSlice";
import { userActions } from "../slices/userSlice";
import { logoutUser } from "./authController";
import sendRequest from "./common/sendRequest";

export const deleteUser = (id, cb) => {
	return async (dispatch) => {
		await sendRequest(`/users/${id}`, "DELETE");
		dispatch(userActions.removeUser());
		cb();
	};
};

export const updateUser = (id, formData, cb) => {
	return async (dispatch) => {
		try {
			const newUser = await sendRequest(`/users/${id}`, "PUT", formData);
			dispatch(userActions.initUser(newUser));
			cb();
		} catch (err) {
			console.log(err);
		}
	};
};

export const changePassword = (id, formData) => {
	return async (dispatch) => {
		try {
			await sendRequest(`/users/${id}/update_password`, "PUT", formData);
			dispatch(logoutUser());
		} catch (err) {
			dispatch(showAndHideMsg('error', err.detail[0].msg));
		}
	};
};

export const getProfessionByName = (name) => {
	return async (dispatch) => {
		try {
			const data = await sendRequest(
				"/users/professions/?name=" + name,
				"GET"
			);
			dispatch(userActions.updateProfessions(data));
		} catch (err) {
			console.log(err);
		}
	};
};
