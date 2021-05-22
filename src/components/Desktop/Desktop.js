import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppComponent from "../AppComponent/AppComponent";
import AppIcon from "../Base/AppIcon";

function Desktop() {
	const appState = useSelector((state) => state.appState);
	const [desktopApps, setDesktopApps] = useState([]);
	useEffect(() => {
		var desktopAppList = [];
		if (
			appState !== undefined &&
			appState !== null &&
			appState.apps !== undefined &&
			appState.apps !== null &&
			appState.apps[0].id !== undefined &&
			appState.apps[0].id !== null &&
			appState.apps[0].id !== ""
		) {
			appState.apps.forEach((app) => {
				desktopAppList.push(app);
			});
			setDesktopApps(desktopAppList);
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
						return <AppIcon appInfo={app} />;
					})}
				</div>
				<div className="app-playground uk-position-right">
					{desktopApps.map((app, index) => {
						return <AppComponent appInfo={app} />;
					})}
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}

export default Desktop;
