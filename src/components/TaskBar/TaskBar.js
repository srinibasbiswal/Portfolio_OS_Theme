import { IconButton } from "@fluentui/react";
import React from "react";
import { useSelector } from "react-redux";
import ClockComponent from "../base/clockComponent";
import TaskBarIcon from "./taskBar-Icon";

function Taskbar(props) {
	const settings = useSelector((state) => state.settingsState);

	return (
		<div className="uk-width-expand taskbar-bottom">
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
					{/* <IconButton
						iconProps={{ iconName: "DelveAnalytics" }}
						title="Cortana"
						ariaLabel="Cortana"
						className="uk-height-1-1 taskbar-icon"
					/> */}
				</div>
				<div className="uk-flex">
					{props.onTaskbarApps.map((app, index) => {
						return <TaskBarIcon appInfo={app} key={index} />;
					})}
				</div>
			</div>
			<div className="uk-position-right uk-flex">
				<div>
					{settings.wifiEnabled && (
						<IconButton
							iconProps={{ iconName: "WifiEthernet" }}
							title="Connected: PIED PIPER"
							ariaLabel="Connected: PIED PIPER"
							className="uk-height-1-1 taskbar-quick-icon"
						/>
					)}
					{!settings.wifiEnabled && (
						<IconButton
							iconProps={{ iconName: "WifiWarning4" }}
							title="Wifi Disabled"
							ariaLabel="Wifi Disabled"
							className="uk-height-1-1 taskbar-quick-icon"
						/>
					)}
				</div>
				<div>
					{settings.isMute && (
						<IconButton
							iconProps={{ iconName: "VolumeDisabled" }}
							title="Muted"
							ariaLabel="Muted"
							className="uk-height-1-1 taskbar-quick-icon"
						/>
					)}
					{!settings.isMute && (
						<IconButton
							iconProps={{ iconName: "Volume3" }}
							title="Volume"
							ariaLabel="Volume"
							className="uk-height-1-1 taskbar-quick-icon"
						/>
					)}
				</div>
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
	);
}

export default Taskbar;
