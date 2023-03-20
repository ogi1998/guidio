import {createSlice} from '@reduxjs/toolkit';

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

export const showAndHideMsg = (type, msg) => {
	return async dispatch => {
		if (type === 'error') {
			dispatch(uiActions.setError(msg));
			setTimeout(() => {dispatch(uiActions.setError(''))}, 4000);
		}
		if (type === 'success') {
			dispatch(uiActions.setSuccess(msg));
			setTimeout(() => {dispatch(uiActions.setSuccess(''))}, 4000);
		}
	};
};