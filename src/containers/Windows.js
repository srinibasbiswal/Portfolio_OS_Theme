import React, { useState } from "react";
import { useSelector } from "react-redux";
import LockScreen from "./LockScreen";

function Windows() {
	const systemState = useSelector((state) => state.systemState);

	return (
		<div className="uk-width-expand" uk-height-viewport="expand: true">
			{(() => {
				if (systemState.isLocked) {
					return <LockScreen />;
				} else if (systemState.isShutDown) {
					return <div>ShutDown</div>;
				} else if (systemState.isDesktop) {
					return <div>Desktop</div>;
				} else {
					return <div>Something went wrong !!</div>;
				}
			})()}
		</div>
	);
}

export default Windows;
