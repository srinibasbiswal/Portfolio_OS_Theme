import React from "react";
import { Routes, Route } from "react-router-dom";
import BlueScreen404 from "../containers/blueScreen404.container";
import Windows from "../containers/windows.container";
import MacOS from "../containers/macOS.container";
import OSSelection from "../containers/osSelection.container";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<OSSelection />} />
			<Route path="/windows10" element={<Windows />} />
			<Route path="/macOS" element={<MacOS />} />
			<Route path="/windows" element={<Windows />} />
			<Route path="/home" element={<OSSelection />} />
			<Route path="/404" element={<BlueScreen404 />} />
			<Route path="*" element={<BlueScreen404 />} />
		</Routes>
	);
}

export default AppRoutes;
