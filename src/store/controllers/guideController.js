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
			dispatch(guideActions.setGuideErrorMsg(err.detail));
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
			dispatch(guideActions.setGuideErrorMsg(err.detail));
		}
	}
}

export const guidesByUserId = (id, pageSize, page, cb) => {
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
			console.log(err);
		}
	}
}

export const createGuide = function (title, content, cb) {
	return async dispatch => {
		try {
			await sendRequest('/guides', 'POST', { title, content });
			cb();
		} catch (err) {
			dispatch(showAndHideMsg('error', 'Error creating a guide'));
		}
	}
}

export const updateGuide = function (title, content, id, cb) {
	return async dispatch => {
		try {
			await sendRequest(`/guides/${id}`, 'PUT', { title, content });
			cb();
		} catch (err) {
			dispatch(showAndHideMsg('error', 'Error updating a guide'));
		}
	}
}

export const getGuideById = function (id) {
	return async dispatch => {
		try {
			const { title, content, guideId, user } = await sendRequest(`/guides/guide/${id}`, 'GET');
			dispatch(guideActions.setActiveGuide({ title: `# ${title}`, content, guideId, userId: user.userId }));
		} catch (err) {
			console.log(err);
		}
	}
}

export const deleteGuide = (id, cb) => {
	return async () => {
		await sendRequest(`/guides/${id}`, "DELETE");
		cb();
	};
};