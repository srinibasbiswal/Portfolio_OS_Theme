import { IconButton } from "@fluentui/react";
import React from "react";
import ClockComponent from "../Base/ClockComponent";
import TaskBarIcon from "./TaskBarIcon";

function Taskbar(props) {
	return (
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
					{props.onTaskbarApps.map((app, index) => {
						return <TaskBarIcon appInfo={app} key={index} />;
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
	);
}

export default Taskbar;