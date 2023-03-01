import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		initUser(state, action) {
			state.userId = action.payload;
		}
	}
});

export default userSlice;

export const userActions = userSlice.actions;

export const loginUser = function(formData) {
	return async dispatch => {
		async function sendRequest() {
			const response = await fetch('/auth/login', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			return data;
		}

		const data = await sendRequest();
		dispatch(userActions.initUser(data.userId));
	}
}
