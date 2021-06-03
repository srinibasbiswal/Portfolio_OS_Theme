import React from "react";
import { useSelector } from "react-redux";
import DesktopContainer from "./desktop.container";
import LockScreen from "./lockScreen.container";
import ShutDown from "./shutDown.container";

function Windows() {
	const systemState = useSelector((state) => state.systemState);

	return (
		<div className="uk-width-expand">
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
