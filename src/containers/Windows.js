import React from "react";
import { useSelector } from "react-redux";
import DesktopContainer from "./DesktopContainer";
import LockScreen from "./LockScreen";
import ShutDown from "./ShutDown";

function Windows() {
	const systemState = useSelector((state) => state.systemState);

	return (
		<div className="uk-width-expand" uk-height-viewport="expand: true">
			{(() => {
				if (systemState.isLocked) {
					return <LockScreen />;
				} else if (systemState.isShutDown) {
					return <ShutDown />;
				} else if (systemState.isDesktop) {
					return <DesktopContainer />;
				} else {
					return <div>Something went wrong !!</div>;
				}
			})()}
		</div>
	);
}

export default Windows;
