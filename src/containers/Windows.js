import React, { useState } from "react";
import { PrimaryButton } from "@fluentui/react";
import LockScreen from "./LockScreen";

function Windows() {
	const [currentState, setCurrentState] = useState({
		isLocked: true,
		isShutDown: false,
	});

	return (
		<div className="uk-width-expand" uk-height-viewport="expand: true">
			{(() => {
				if (currentState.isLocked) {
					return <LockScreen />;
				} else if (currentState.isShutDown) {
					return <div>ShutDown</div>;
				} else {
					return <div>Desktop</div>;
				}
			})()}
		</div>
	);
}

export default Windows;
