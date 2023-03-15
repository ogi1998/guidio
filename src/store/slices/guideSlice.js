import { createSlice } from "@reduxjs/toolkit";
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
		const res = await fetch(`/guides?page=${page}&page_size=12`);
		const data = await res.json();
		dispatch(guideActions.getGuides(data.guides));
	}
}