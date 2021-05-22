import React, { useState } from "react";
import LockWallpaperScreen from "../components/LockScreen/LockWallpaperScreen";
import wallpaper1 from "../assets/LockScreenImages/wallpaper1.jpg";

function LockScreen() {
	const [showSignInPage, setCurrentState] = useState(false);

	if (showSignInPage) {
	} else {
		return <LockWallpaperScreen currentWallpaper={wallpaper1} />;
	}
}

export default LockScreen;
