import { IconButton, TextField } from "@fluentui/react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./AppComponent.scss";
import { useDispatch } from "react-redux";
import { handleAppFunctions } from "../../utils/actions/appStateAction";
import { ACTION_TYPES } from "../../utils/Documents/enums";

function AppComponent(props) {
	const dispatch = useDispatch();
	const handleAppFunctionClick = (app, type) => {
		dispatch(handleAppFunctions(app, type));
	};

	const [currentComponentName, setCurrentComponentName] = useState("");

	const setComponent = (componentName) => {
		setCurrentComponentName(componentName);
	};

	return (
		<Draggable
			axis={"both"}
			allowAnyClick={false}
			bounds={"parent"}
			position={null}
			grid={[1, 1]}
			scale={1}
			defaultPosition={{ x: 0, y: 0 }}
			handle=".app-topbar"
		>
			<div
				className={
					"app-component uk-border-rounded uk-box-shadow-medium uk-flex uk-flex-row " +
					(props.appInfo.isMaximized ? "maximized" : "")
				}
			>
				{props.appInfo.showLinks && (
					<div
						className={
							"app-sidebar blur uk-hidden@xs uk-visible@m " +
							(props.appInfo.isApplication ? "isApplication" : "")
						}
					>
						<ul
							class="uk-list sidebar-list uk-margin-large-top"
							uk-switcher={"connect: ." + props.appInfo.id}
						>
							{props.appInfo.subComponent.map(
								(component, index) => {
									return (
										<li className="uk-margin-remove">
											<a
												className="uk-link-reset"
												onClick={() =>
													setComponent(component.name)
												}
											>
												<li className="sidebar-list-item uk-margin-remove">
													{component.name}
												</li>
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>
				)}
				<div
					className={
						props.appInfo.isApplication && props.appInfo.isMaximized
							? "maximized-application"
							: "app-content-container"
					}
				>
					<div className="app-topbar blur uk-border-rounded uk-grid uk-margin-remove">
						<div className="uk-width-auto uk-background-secondary app-title uk-padding-medium uk-border-rounded">
							<span className="uk-margin-medium-right">
								<img
									src={
										props.appInfo.icon != undefined &&
										props.appInfo.icon != null &&
										props.appInfo.icon != ""
											? props.appInfo.icon
											: ""
									}
									width="20"
									height="20"
									className="uk-margin-small-right"
								/>
								<span className="uk-margin-small-top">
									{props.appInfo.name}
								</span>
							</span>
						</div>
						<div className="uk-width-expand app-top-functions ">
							<div className="uk-align-right">
								<IconButton
									iconProps={{ iconName: "ChromeMinimize" }}
									title="Minimize"
									ariaLabel="Minimize"
									onClick={() =>
										handleAppFunctionClick(
											props.appInfo,
											ACTION_TYPES.MINIMIZE
										)
									}
								/>
								<IconButton
									iconProps={{ iconName: "ChromeRestore" }}
									title="Restore"
									ariaLabel="Restore"
									onClick={() =>
										handleAppFunctionClick(
											props.appInfo,
											ACTION_TYPES.MAXIMIZE
										)
									}
								/>
								<IconButton
									iconProps={{ iconName: "ChromeClose" }}
									title="Close"
									ariaLabel="Close"
									className="close-button"
									onClick={() =>
										handleAppFunctionClick(
											props.appInfo,
											ACTION_TYPES.CLOSE
										)
									}
								/>
							</div>
						</div>
					</div>
					<div className="app-content uk-background-secondary scrollbar">
						{!props.appInfo.isApplication && (
							<div className="app-nav-bar uk-padding-small uk-flex">
								<IconButton
									iconProps={{ iconName: "Back" }}
									title="Back"
									ariaLabel="Back"
								/>
								<IconButton
									iconProps={{ iconName: "Forward" }}
									title="Forward"
									ariaLabel="Forward"
								/>
								<TextField
									disabled
									iconProps={{ iconName: "Refresh" }}
									className="uk-margin-small-right disabled-text-field uk-width-3-5"
									placeholder={`This PC > ${props.appInfo.name} > ${currentComponentName}`}
								/>
								<TextField
									disabled
									iconProps={{ iconName: "Search" }}
									className="uk-margin-small-right disabled-text-field uk-width-1-5"
									placeholder={`Search`}
								/>
							</div>
						)}

						<ul
							className={
								"uk-switcher " +
								props.appInfo.id +
								(props.appInfo.isApplication
									? " isApplication-list"
									: "")
							}
						>
							{props.appInfo.subComponent.map(
								(component, index) => {
									return (
										<li
											className={
												"sidebar-list-item uk-margin-remove " +
												(props.appInfo.isApplication
													? "height-100"
													: "")
											}
										>
											<React.Fragment>
												<component.component></component.component>
											</React.Fragment>
										</li>
									);
								}
							)}
						</ul>
					</div>
				</div>
			</div>
		</Draggable>
	);
}

export default AppComponent;
