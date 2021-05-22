import { IconButton } from "@fluentui/react";
import React from "react";
import Draggable from "react-draggable";
import "./AppComponent.scss";

function AppComponent(props) {
	return (
		<Draggable
			axis={"both"}
			allowAnyClick={false}
			bounds={"parent"}
			position={null}
			grid={[1, 1]}
			scale={1}
			handle=".app-topbar"
		>
			<div className="app-component uk-border-rounded">
				<div className="uk-position-top app-topbar uk-background-muted uk-border-rounded">
					<div className="uk-align-left uk-margin-small-left">
						{props.appInfo.name}
					</div>
					<div className="uk-align-right">
						<IconButton
							iconProps={{ iconName: "ChromeMinimize" }}
							title="Minimize"
							ariaLabel="Minimize"
						/>
						<IconButton
							iconProps={{ iconName: "ChromeRestore" }}
							title="Restore"
							ariaLabel="Restore"
						/>
						<IconButton
							iconProps={{ iconName: "ChromeClose" }}
							title="Close"
							ariaLabel="Close"
							className="close-button"
						/>
					</div>
				</div>
			</div>
		</Draggable>
	);
}

export default AppComponent;
