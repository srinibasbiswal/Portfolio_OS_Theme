import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterObjectList } from "../../utils/services/common-util-servies";
import ActionCenter from "../ActionCenter/ActionCenter";
import AppComponent from "../AppComponent/AppComponent";
import AppIcon from "../Base/AppIcon";
import CalendarOverlay from "../Base/CalendarOverlay";
import StartMenu from "../StartMenu/StartMenu";
import Taskbar from "../TaskBar/TaskBar";
import "./Desktop.scss";

function Desktop() {
	const appState = useSelector((state) => state.appState);
	const [desktopApps, setDesktopApps] = useState([]);
	const [onDesktopApps, setonDesktopApps] = useState([]);
	const [onTaskbarApps, setonTaskBarApps] = useState([]);
	useEffect(() => {
		var desktopAppList = [];
		var onDesktopAppList = [];
		var onTaskBarAppList = [];
		if (
			appState !== undefined &&
			appState !== null &&
			appState.apps !== undefined &&
			appState.apps !== null
		) {
			desktopAppList = filterObjectList(
				appState.apps,
				"showInDesktop",
				true
			);
			onTaskBarAppList = filterObjectList(
				appState.apps,
				"isOpened",
				true
			);
			onDesktopAppList = filterObjectList(
				onTaskBarAppList,
				"isMinimized",
				false
			);
			setDesktopApps(desktopAppList);
			setonDesktopApps(onDesktopAppList);
			setonTaskBarApps(onTaskBarAppList);
		}
	}, [appState]);

	if (
		desktopApps !== undefined &&
		desktopApps !== null &&
		desktopApps.length > 0
	) {
		return (
			<div className="screenHeight">
				<ActionCenter />
				<StartMenu />
				<CalendarOverlay />
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
				<Taskbar onTaskbarApps={onTaskbarApps} />
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}

export default Desktop;
