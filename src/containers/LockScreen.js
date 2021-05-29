import React, { useState } from "react";
import LockWallpaperScreen from "../components/LockScreen/LockWallpaperScreen";
import wallpaper1 from "../assets/images/LockScreenImages/wallpaper1.jpg";
import SignInScreen from "../components/LockScreen/SignInScreen";

function LockScreen(props) {
	const [showSignInPage, setLockScreenState] = useState(false);
	const currentWallpaper = wallpaper1;
	let changeScreenState = () => {
		setLockScreenState(true);
	};

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
			onClick={changeScreenState}
		>
			{(() => {
				if (showSignInPage) {
					return <SignInScreen />;
				} else {
					return <LockWallpaperScreen />;
				}
			})()}
		</div>
	);
}

export default LockScreen;
