import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	guidesData: {},
	activeGuide: {}
}
const guideSlice = createSlice({
	name: 'guide',
	initialState,
	reducers: {
		setGuides(state ,action) {
			state.guidesData = action.payload;
		},
		updateGuides(state, action) {
			state.guidesData.guides = [...state.guidesData.guides, ...action.payload];
		},
		setActiveGuide(state, action) {
			state.activeGuide = action.payload;
		},
		filterActiveGuide(state) {
			state.guidesData.guides = state.guidesData.guides.filter(guide => guide.guideId !== state.activeGuide.guideId);
		}
	}
})

export default guideSlice;

export const guideActions = guideSlice.actions;


