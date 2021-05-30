import React, { useState } from "react";
import LockWallpaperScreen from "../components/LockScreen/LockWallpaperScreen";
import wallpaper1 from "../assets/images/LockScreenImages/wallpaper1.jpg";
import SignInScreen from "../components/LockScreen/SignInScreen";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/ContextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/Documents/enums";

const MENU_ID = "context-menu";

function LockScreen(props) {
	const [showSignInPage, setLockScreenState] = useState(false);
	const currentWallpaper = wallpaper1;
	let changeScreenState = () => {
		setLockScreenState(true);
	};

	const { show } = useContextMenu({
		id: MENU_ID,
	});
	function handleContextMenu(event) {
		event.preventDefault();
		show(event, {
			props: {
				key: "value",
			},
		});
	}

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
			onClick={changeScreenState}
			onContextMenu={handleContextMenu}
		>
			{(() => {
				if (showSignInPage) {
					return <SignInScreen />;
				} else {
					return <LockWallpaperScreen />;
				}
			})()}
			<DesktopContextMenu location={SCREENS.LOCK_SCREEN} />
		</div>
	);
}

export default LockScreen;
