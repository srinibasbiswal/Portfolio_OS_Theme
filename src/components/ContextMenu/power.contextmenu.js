import React from "react";
import { Callout } from "@fluentui/react/lib/Callout";
import { DefaultButton } from "@fluentui/react";
import "./contextMenu.scss";

function ContextMenu(props) {
	return (
		<Callout
			setInitialFocus
			onDismiss={props.onHidePowerMenu}
			className="context-menu"
		>
			<DefaultButton
				onClick={props.onHidePowerMenu}
				text="Context Menu"
			/>
		</Callout>
	);
}

export default ContextMenu;
