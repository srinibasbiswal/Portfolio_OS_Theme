import React from "react";
import folder from "../../assets/baseImages/default_folder.png";

function AppIcon(props) {
	return (
		<div className="uk-text-center uk-margin-small uk-button">
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
