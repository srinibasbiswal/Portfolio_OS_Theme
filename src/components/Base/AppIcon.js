import React from "react";
import { useDispatch } from "react-redux";
import { handleApplicationClick } from "../../utils/actions/appStateAction";
import folder from "../../assets/images/baseImages/default_folder.png";

function AppIcon(props) {
	const dispatch = useDispatch();
	const handleIconClick = (app) => {
		dispatch(handleApplicationClick(app));
	};

	return (
		<div
			className="uk-text-center uk-margin-small uk-button"
			onClick={() => handleIconClick(props.appInfo)}
		>
			<div>
				<img
					className="uk-border-circle"
					src={folder}
					width="40"
					height="40"
				/>
			</div>
			<div className="font-color-white">{props.appInfo.name}</div>
		</div>
	);
}

export default AppIcon;
