import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	guides: {},
	activeGuide: {}
}
const guideSlice = createSlice({
	name: 'guide',
	initialState,
	reducers: {
		setGuides(state ,action) {
			state.guides = action.payload;
		},
		updateGuides(state, action) {
			state.guides.guides = [...state.guides.guides, ...action.payload];
		},
		setActiveGuide(state, action) {
			state.activeGuide = action.payload;
		}
	}
})

export default guideSlice;

export const guideActions = guideSlice.actions;


