import { IconButton, TextField } from "@fluentui/react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./appComponent.scss";
import { useDispatch } from "react-redux";
import { handleAppFunctions } from "../../utils/actions/app.action";
import { ACTION_TYPES } from "../../utils/documents/enums";

function AppComponent(props) {
	const dispatch = useDispatch();
	const handleAppFunctionClick = (app, type) => {
		dispatch(handleAppFunctions(app, type));
	};

	const [showAppMenu, setShowAppMenu] = useState(false);
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
			handle=".title-bar"
		>
			<div
				className={
					"app-component  uk-border-rounded uk-box-shadow-medium uk-flex uk-flex-row " +
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
							className="uk-list sidebar-list uk-margin-large-top"
							uk-switcher={"connect: ." + props.appInfo.id}
						>
							{props.appInfo.subComponent.map(
								(component, index) => {
									return (
										<li
											className="uk-margin-remove"
											key={index}
										>
											<a
												className="uk-link-reset"
												onClick={() =>
													setComponent(component.name)
												}
												href={() => false}
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
						"uk-width-expand@s " +
							(props.appInfo.isApplication &&
								props.appInfo.isMaximized) ||
						props.appInfo.isApplication
							? "maximized-application"
							: "app-content-container"
					}
				>
					<div className="app-topbar blur uk-border-rounded uk-grid uk-margin-remove">
						<div className="title-bar uk-margin-remove uk-padding-remove">
							<div className="app-title  uk-background-secondary uk-border-rounded">
								<span className="uk-margin-medium-right uk-margin-small-left">
									<img
										src={
											props.appInfo.icon !== undefined &&
											props.appInfo.icon !== null &&
											props.appInfo.icon !== ""
												? props.appInfo.icon
												: ""
										}
										alt={props.appInfo.name}
										width="20"
										height="20"
										className="uk-margin-small-right"
									/>
									<span className="uk-margin-small-top">
										{props.appInfo.name}
									</span>
								</span>
							</div>
						</div>
						<div className="app-top-functions uk-flex">
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
						<div className="dropdown">
							<IconButton
								iconProps={{
									iconName: "GlobalNavButton",
								}}
								title="Menu"
								ariaLabel="Menu"
								className="uk-hidden@m"
								onClick={() => setShowAppMenu(!showAppMenu)}
							/>
							<div
								className={
									"dropdown-content blur uk-box-shadow-large " +
									(showAppMenu
										? "show-element"
										: "hide-element")
								}
							>
								<ul
									className="uk-list sidebar-list"
									uk-switcher={
										"connect: ." + props.appInfo.id
									}
								>
									{props.appInfo.subComponent.map(
										(component, index) => {
											return (
												<li
													className="uk-margin-remove"
													onClick={() =>
														setShowAppMenu(
															!showAppMenu
														)
													}
													key={index}
												>
													<a
														className="uk-link-reset"
														onClick={() =>
															setComponent(
																component.name
															)
														}
														href={() => false}
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
						</div>

						<ul
							className={
								"uk-switcher height-100 " +
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
											className="uk-padding-small height-100"
											key={index}
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
