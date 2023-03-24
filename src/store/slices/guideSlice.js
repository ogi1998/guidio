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


