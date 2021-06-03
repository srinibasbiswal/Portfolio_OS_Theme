import React from "react";
import { useDispatch } from "react-redux";
import { handleApplicationClick } from "../../utils/actions/app.action";
import folder from "../../assets/images/baseImages/default_folder.png";

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
				src={
					props.appInfo.icon !== undefined &&
					props.appInfo.icon !== null &&
					props.appInfo.icon !== ""
						? props.appInfo.icon
						: folder
				}
				alt={props.appInfo.name}
				width="30"
				height="30"
			/>
		</div>
	);
}

export default TaskBarIcon;
