import React, { useState } from "react";
import LockWallpaperScreen from "../components/lockScreen/landing.lockScreen";
import lockScreenWall from "../assets/images/wallpapers/lockScreenWall.jpg";
import SignInScreen from "../components/lockScreen/signIn.lockScreen";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/contextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/documents/enums";

const MENU_ID = "context-menu";

function LockScreen(props) {
	const [showSignInPage, setLockScreenState] = useState(false);
	const currentWallpaper = lockScreenWall;
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
