import { useEffect } from "react";
import { useSelector } from "react-redux";

function ThemeSync() {
	const themeMode = useSelector((state) => state.settingsState.themeMode);

	useEffect(() => {
		const resolvedTheme = themeMode === "light" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", resolvedTheme);
		document.body.setAttribute("data-theme", resolvedTheme);
	}, [themeMode]);

	return null;
}

export default ThemeSync;
