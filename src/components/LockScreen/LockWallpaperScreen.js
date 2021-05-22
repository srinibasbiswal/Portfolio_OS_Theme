import React from "react";
import Clock from "react-live-clock";
import { Icon } from "@fluentui/react/lib/Icon";
import "./LockScreen.scss";

function LockWallpaperScreen(props) {
	const currentWallpaper = props.currentWallpaper;
	return (
		<div
			class="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
		>
			{/* LockScreen Clock */}
			<div className="uk-position-bottom-left uk-overlay uk-flex uk-flex-column">
				<h1 className="uk-heading-large uk-margin-remove-bottom font-color-white ">
					<Clock ticking={true} />
				</h1>
				<h1 className="uk-heading-small uk-margin-remove-top font-color-white ">
					<Clock format={"dddd,DD MMMM"} ticking={true} />
				</h1>
			</div>

			{/* LockScreenIcons */}
			<div className="uk-position-bottom-right uk-overlay uk-flex uk-flex-column">
				<Icon iconName="WifiEthernet" />
			</div>
		</div>
	);
}

export default LockWallpaperScreen;
