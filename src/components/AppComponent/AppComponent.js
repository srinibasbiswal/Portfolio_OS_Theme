import { IconButton, Nav, TextField } from "@fluentui/react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./AppComponent.scss";
import { useDispatch } from "react-redux";
import { handleAppFucntions } from "../../utils/actions/appStateAction";
import { ACTION_TYPES } from "../../utils/Documents/enums";

function AppComponent(props) {
	const dispatch = useDispatch();
	const handleAppFunctionClick = (app, type) => {
		dispatch(handleAppFucntions(app, type));
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
					<div className="app-sidebar blur uk-hidden@xs uk-visible@m">
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
				<div className="app-content-container">
					<div className="app-topbar uk-background-secondary uk-border-rounded uk-grid uk-margin-remove">
						<div className="uk-width-auto uk-background-secondary app-title uk-margin-medium-right">
							{props.appInfo.name}
						</div>
						<div className="uk-width-expand app-top-functions">
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
						{true && (
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

						<ul className={"uk-switcher " + props.appInfo.id}>
							{props.appInfo.subComponent.map(
								(component, index) => {
									return (
										<li className="sidebar-list-item uk-margin-remove">
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
