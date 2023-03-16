import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../controllers/common/sendRequest";
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