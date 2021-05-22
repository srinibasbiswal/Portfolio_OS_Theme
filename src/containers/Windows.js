import React, { useState } from "react";
import LockScreen from "./LockScreen";

function Windows() {
	const [currentState, setCurrentState] = useState({
		isLocked: true,
		isShutDown: false,
		isDesktop: true,
	});

	const changeSystemState = (nextState) => {
		let currState = currentState;
		currState.isLocked = false;
		currState.isShutDown = false;
		currState.isDesktop = false;
		currState[nextState] = true;
		setCurrentState(currState);
	};

	return (
		<div className="uk-width-expand" uk-height-viewport="expand: true">
			{(() => {
				if (currentState.isLocked) {
					return <LockScreen changeSystemState={changeSystemState} />;
				} else if (currentState.isShutDown) {
					return <div>ShutDown</div>;
				} else if (currentState.isDesktop) {
					return <div>Desktop</div>;
				} else {
					return <div>Something went wrong !!</div>;
				}
			})()}
		</div>
	);
}

export default Windows;
