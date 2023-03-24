import sendRequest from "../controllers/common/sendRequest";
import { guideActions } from "../slices/guideSlice";
import { showAndHideMsg } from "../slices/uiSlice";

export const getGuides = function(page) {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides?page=${page}&page_size=12`, 'GET');
			dispatch(guideActions.getGuides(data.guides));

		} catch(err) {
			console.log(err);
		}
	}
}

export const createGuide = function(title, content, cb) {
	return async dispatch => {
		try {
			await sendRequest('/guides', 'POST', {title, content});
			cb();
		} catch(err) {
			console.log(err);
			dispatch(showAndHideMsg('error', 'Error creating a guide'));
		}
	}
}