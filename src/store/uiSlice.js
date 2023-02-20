import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	shouldShowLayout: true
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
		}
	}
});

export const uiActions = uiSlice.actions;

export default uiSlice;