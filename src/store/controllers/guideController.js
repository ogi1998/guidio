import { MESSAGE_ERROR_GUIDE_CREATE, MESSAGE_ERROR_GUIDE_DELETE, MESSAGE_ERROR_GUIDE_UPDATE, MESSAGE_SUCCESS_GUIDE_DELETE, MESSAGE_SUCCESS_GUIDE_UPDATE, MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from "../constants";
import sendRequest from "../controllers/common/sendRequest";
import { guideActions } from "../slices/guideSlice";
import { showAndHideMsg } from "../slices/uiSlice";

export const getGuides = function (pageSize, page) {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides?page=${page}&page_size=${pageSize}`, 'GET');
			if (page === 1)
				dispatch(guideActions.setGuides({ pages: data.pages, guides: data.guides }));
			if (page > 1)
				dispatch(guideActions.updateGuides(data.guides));

		} catch (err) {
			dispatch(guideActions.setGuides({}));
		}
	}
}

export const searchGuides = function(title) {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides/search?title=${title}&page=1&page_size=12`, 'GET');
			dispatch(guideActions.setGuides({ pages: data.pages, guides: data.guides }));
		} catch(err) {
			dispatch(guideActions.setGuides({}));
		}
	}
}

export const getGuidesByUserId = (id, pageSize, page, cb) => {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides/${id}?page=${page}&page_size=${pageSize}`, 'GET');
			if (page === 1)
				dispatch(guideActions.setGuides({ pages: data.pages, guides: data.guides }));
			if (page > 1)
				dispatch(guideActions.updateGuides(data.guides));
			if (cb)
				cb();
		} catch (err) {
			dispatch(guideActions.setGuides({}));
		}
	}
}

export const createGuide = function (title, content, cb) {
	return async dispatch => {
		try {
			await sendRequest('/guides', 'POST', { title, content });
			cb();
		} catch (err) {
			dispatch(showAndHideMsg(MESSAGE_TYPE_ERROR, MESSAGE_ERROR_GUIDE_CREATE));
		}
	}
}

export const updateGuide = function (title, content, id, cb) {
	return async dispatch => {
		try {
			await sendRequest(`/guides/${id}`, 'PUT', { title, content });
			cb();
			dispatch(showAndHideMsg(MESSAGE_TYPE_SUCCESS, MESSAGE_SUCCESS_GUIDE_UPDATE));
		} catch (err) {
			dispatch(showAndHideMsg(MESSAGE_TYPE_ERROR, MESSAGE_ERROR_GUIDE_UPDATE));
		}
	}
}

export const getGuideById = function (id) {
	return async dispatch => {
		try {
			const { title, content, guideId, user } = await sendRequest(`/guides/guide/${id}`, 'GET');
			dispatch(guideActions.setActiveGuide({ title: `# ${title}`, content, guideId, userId: user.userId }));
		} catch (err) {
			dispatch(guideActions.setActiveGuide({}));
		}
	}
}

export const deleteGuide = (id, cb) => {
	return async (dispatch) => {
		try {
			await sendRequest(`/guides/${id}`, "DELETE");
			cb();
			dispatch(showAndHideMsg(MESSAGE_TYPE_SUCCESS, MESSAGE_SUCCESS_GUIDE_DELETE))
		} catch(err) {
			dispatch(showAndHideMsg(MESSAGE_TYPE_ERROR, MESSAGE_ERROR_GUIDE_DELETE));
		}
	};
};