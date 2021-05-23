import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterObjectList } from "../../utils/services/common-util-servies";
import AppComponent from "../AppComponent/AppComponent";
import AppIcon from "../Base/AppIcon";

function Desktop() {
	const appState = useSelector((state) => state.appState);
	const [desktopApps, setDesktopApps] = useState([]);
	const [onDesktopApps, setonDesktopApps] = useState([]);
	useEffect(() => {
		var desktopAppList = [];
		var onDesktopAppList = [];
		if (
			appState !== undefined &&
			appState !== null &&
			appState.apps !== undefined &&
			appState.apps !== null
		) {
			desktopAppList = filterObjectList(appState.apps, "id", "aboutMe");
			onDesktopAppList = filterObjectList(
				appState.apps,
				"isMaximized",
				true
			);
			setDesktopApps(desktopAppList);
			setonDesktopApps(onDesktopAppList);
		}
	}, [appState]);

	if (
		desktopApps !== undefined &&
		desktopApps !== null &&
		desktopApps.length > 0
	) {
		return (
			<div className="screenHeight">
				<div className="uk-position-left uk-flex uk-flex-column">
					{desktopApps.map((app, index) => {
						return <AppIcon appInfo={app} key={index} />;
					})}
				</div>
				<div className="app-playground uk-position-right">
					{onDesktopApps.map((app, index) => {
						return <AppComponent appInfo={app} key={index} />;
					})}
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}

export default Desktop;
