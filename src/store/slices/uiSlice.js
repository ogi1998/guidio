import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	shouldShowLayout: true,
	errorMsg: ''
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showLayout(state) {
			state.shouldShowLayout = true;
		},
		hideLayout(state) {
			state.shouldShowLayout = false;
		},

		createError(state, action) {
			state.errorMsg = action.payload;
		},

		clearErrors(state) {
			state.errorMsg = '';
		}
	}
});

export const uiActions = uiSlice.actions;

export default uiSlice;