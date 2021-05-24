import React from "react";
import { useDispatch } from "react-redux";
import { handleApplicationClick } from "../../utils/actions/appStateAction";
import folder from "../../assets/baseImages/default_folder.png";

function TaskBarIcon(props) {
	const dispatch = useDispatch();
	const handleIconClick = (app) => {
		dispatch(handleApplicationClick(app));
	};

	return (
		<div
			onClick={() => handleIconClick(props.appInfo)}
			className={
				"taskbar-icon uk-flex uk-flex-center uk-flex-middle taskbar-icon-active" +
				(!props.appInfo.isMinimized ? " onDesktop" : "")
			}
		>
			<img
				className="uk-border-circle"
				src={folder}
				width="30"
				height="30"
			/>
		</div>
	);
}

export default TaskBarIcon;
