import { IconButton } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterObjectList } from "../../utils/services/common-util-servies";
import ActionCenter from "../ActionCenter/ActionCenter";
import AppComponent from "../AppComponent/AppComponent";
import AppIcon from "../Base/AppIcon";
import CalendarOverlay from "../Base/CalendarOverlay";
import ClockComponent from "../Base/ClockComponent";
import TaskBarIcon from "../Base/TaskBarIcon";
import StartMenu from "../StartMenu/StartMenu";
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
			onDesktopAppList = filterObjectList(
				appState.apps,
				"isMaximized",
				true
			);
			onTaskBarAppList = filterObjectList(
				appState.apps,
				"isOpened",
				true
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
				<div className="uk-position-bottom uk-width-expand taskbar-bottom">
					<div className="uk-position-left uk-flex">
						<div className="uk-flex">
							<div
								className="uk-height-1-1 taskbar-icon"
								uk-toggle="target: #start-menu"
							>
								<IconButton
									iconProps={{ iconName: "WindowsLogo" }}
									title="Start"
									ariaLabel="Start"
									className="uk-height-1-1 taskbar-icon"
								/>
							</div>
							<IconButton
								iconProps={{ iconName: "Search" }}
								title="Search"
								ariaLabel="Search"
								className="uk-height-1-1 taskbar-icon"
							/>
							<IconButton
								iconProps={{ iconName: "DelveAnalytics" }}
								title="Cortana"
								ariaLabel="Cortana"
								className="uk-height-1-1 taskbar-icon"
							/>
						</div>
						<div className="uk-flex">
							{onTaskbarApps.map((app, index) => {
								return (
									<TaskBarIcon appInfo={app} key={index} />
								);
							})}
						</div>
					</div>
					<div className="uk-position-right uk-flex">
						<div>
							<ClockComponent />
						</div>
						<div
							className="uk-height-1-1 taskbar-icon"
							uk-toggle="target: #action-center"
						>
							<IconButton
								iconProps={{ iconName: "ActionCenter" }}
								title="Action Center"
								ariaLabel="Action Center"
								className="uk-height-1-1 taskbar-icon"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}

export default Desktop;
