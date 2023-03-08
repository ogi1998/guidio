import { configureStore } from '@reduxjs/toolkit';
import guideSlice from './guideSlice';
import uiSlice from './uiSlice';
import userSlice from './userSlice';

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		user: userSlice.reducer,
		guide: guideSlice.reducer
	}
});

export default store;