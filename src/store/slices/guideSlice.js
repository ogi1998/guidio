import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../controllers/common/sendRequest";
import { showAndHideMsg } from "./uiSlice";
const initialState = {
	guides: [],
	activeGuide: {}
}
const guideSlice = createSlice({
	name: 'guide',
	initialState,
	reducers: {
		getGuides(state ,action) {
			state.guides = action.payload;
		}
	}
})

export default guideSlice;

export const guideActions = guideSlice.actions;


export const getGuides = function(page) {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides?page=${page}&page_size=12`, 'GET');
			dispatch(guideActions.getGuides(data.guides));

		} catch(err) {

		}
	}
}

export const createGuide = function(title, content) {
	return async dispatch => {
		try {
			await sendRequest('/guides', 'POST', {title, content});
		} catch(err) {
			console.log(err);
			dispatch(showAndHideMsg('error', 'Error creating a guide'));
		}
	}
}