import React from "react";
import { Routes, Route } from "react-router-dom";
import BlueScreen404 from "../containers/blueScreen404.container";
import Windows from "../containers/windows.container";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Windows />} />
			<Route path="/home" element={<Windows />} />
			<Route path="/windows" element={<Windows />} />
			<Route path="/404" element={<BlueScreen404 />} />
			<Route path="*" element={<BlueScreen404 />} />
		</Routes>
	);
}

export default AppRoutes;
