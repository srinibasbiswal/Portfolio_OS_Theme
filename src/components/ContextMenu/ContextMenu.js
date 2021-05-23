import React from "react";
import { Callout } from "@fluentui/react/lib/Callout";
import { DefaultButton } from "@fluentui/react";

function ContextMenu(props) {
	return (
		<Callout setInitialFocus onDismiss={props.onHidePowerMenu}>
			<DefaultButton
				onClick={props.onHidePowerMenu}
				text="Context Menu"
			/>
		</Callout>
	);
}

export default ContextMenu;
