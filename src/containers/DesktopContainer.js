import React from "react";
import wallpaper1 from "../assets/LockScreenImages/wallpaper1.jpg";
import Desktop from "../components/Desktop/Desktop";

function DesktopContainer() {
	const currentWallpaper = wallpaper1;

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
		>
			<Desktop />
		</div>
	);
}

export default DesktopContainer;
