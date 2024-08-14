import { useDispatch, useSelector } from "react-redux"
import { getGuides, searchGuides, getGuidesByUserId } from "../../../store/controllers/guideController";

import { useCallback, useEffect } from "react";

import List from "../list/List"
import GuidesItem from "./GuidesItem";
import { resetGuides } from "../../../store/slices/guideSlice";

const Guides = ({ user, isSingleUser }) => {
	const dispatch = useDispatch();

	const { guides, pages } = useSelector(state => state.guide.guidesData);

	const getGuidesHandler = useCallback(activePage => {
		isSingleUser ? dispatch(getGuidesByUserId(user.userId, activePage, 12)) : dispatch(getGuides(activePage));
	}, [dispatch, isSingleUser, user]);

	const searchGuidesHandler = useCallback((title, activePage) => {
		dispatch(searchGuides(title, activePage));
	}, [dispatch]);

	useEffect(() => {
		dispatch(resetGuides());
	}, [dispatch]);

	return (
		<div className={`${!isSingleUser && "pt-48"}`}>
			<List
				user={user}
				title="Guides"
				onSearch={isSingleUser ? null : searchGuidesHandler}
				onGet={getGuidesHandler}
				items={guides}
				pages={pages}
				resource='guides'
			>
				<div className={`grid ${isSingleUser ? "grid-cols-3" : "grid-cols-4"} w-full gap-5`}>
					{guides &&
						guides.map(guide =>
							<GuidesItem guide={guide} key={guide.guideId} />
						)}
				</div>
			</List>
		</div>
	)
}
export default Guides