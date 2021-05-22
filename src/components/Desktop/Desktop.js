import React from "react";
import AppComponent from "../AppComponent/AppComponent";
import AppIcon from "../Base/AppIcon";

function Desktop() {
	return (
		<div className="screenHeight">
			<div className="uk-position-left">
				<AppIcon />
			</div>
			<div className="app-playground uk-position-right">
				<AppComponent />
				<AppComponent />
			</div>
			<div className="uk-position-bottom uk-width-expand">2</div>
		</div>
	);
}

export default Desktop;
