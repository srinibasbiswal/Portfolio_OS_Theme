import { IconButton } from "@fluentui/react";
import React from "react";
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
					"app-component uk-border-rounded uk-box-shadow-medium " +
					(props.appInfo.isMaximized ? "maximized" : "")
				}
			>
				<div className="uk-position-top app-topbar uk-background-muted uk-border-rounded">
					<div className="uk-align-left uk-margin-small-left">
						{props.appInfo.name}
					</div>
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
		</Draggable>
	);
}

export default AppComponent;
