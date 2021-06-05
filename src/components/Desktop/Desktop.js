import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterObjectList } from "../../utils/services/common-util-servies";
import ActionCenter from "../actionCenter/actionCenter";
import AppComponent from "../appComponent/appComponent";
import AppIcon from "../base/appIcon";
import CalendarOverlay from "../base/calendarOverlay";
import StartMenu from "../startMenu/startMenu";
import Taskbar from "../taskBar/taskBar";
import "./desktop.scss";
import Loading from "../loading/loading";

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
			<div className="screenHeight uk-flex uk-flex-column">
				<div className="desktop-container">
					<ActionCenter />
					<StartMenu />
					<CalendarOverlay />
					<div className="app-playground uk-position-right">
						<div className="uk-position-left uk-flex uk-flex-column">
							{desktopApps.map((app, index) => {
								return <AppIcon appInfo={app} key={index} />;
							})}
						</div>
						{onDesktopApps.map((app, index) => {
							return <AppComponent appInfo={app} key={index} />;
						})}
					</div>
				</div>
				<div className="taskbar uk-position-bottom">
					<Taskbar onTaskbarApps={onTaskbarApps} />
				</div>
			</div>
		);
	} else {
		return <Loading />;
	}
}

export default Desktop;
