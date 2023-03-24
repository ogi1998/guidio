import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showLayout: true,
	errorMsg: '',
	successMsg: ''
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setShowLayout(state, action) {
			state.showLayout = action.payload;
		},
		setError(state, action) {
			state.errorMsg = action.payload;
		},
		setSuccess(state, action) {
			state.successMsg = action.payload;
		}
	}
});

export const uiActions = uiSlice.actions;

export default uiSlice;

let timeout;

export const showAndHideMsg = (type, msg) => {
	clearTimeout(timeout);
	return async dispatch => {
		if (type === 'error') {
			dispatch(uiActions.setSuccess(''));
			dispatch(uiActions.setError(msg));
			timeout = setTimeout(() => {
				dispatch(uiActions.setError(''));
				timeout = null;
			}, 4000);
		}
		if (type === 'success') {
			dispatch(uiActions.setError(''));
			dispatch(uiActions.setSuccess(msg));
			setTimeout(() => {
				dispatch(uiActions.setSuccess(''));
			timeout = null;
		}, 4000);
		}
	};
};

export const clearMessages = () => {
	clearTimeout(timeout);
	return async dispatch => {
		dispatch(uiActions.setError(''));
		dispatch(uiActions.setSuccess(''));
	}
}