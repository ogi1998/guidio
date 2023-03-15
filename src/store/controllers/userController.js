import { userActions } from "../slices/userSlice";
import sendRequest from "./common/sendRequest";

export const deleteUser = (id, cb) => {

	return async dispatch => {
		await sendRequest(`/users/${id}`, 'DELETE');
		dispatch(userActions.removeUser());
		cb();
	}
};