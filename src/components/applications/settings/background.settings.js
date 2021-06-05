import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDesktopBackground } from "../../../utils/actions/settingsaction";
import settings from "../../../utils/data/settings.config";
import checked from "../../../assets/images/baseImages/checked.svg";
import "./settings.scss";
import firebase from "../../../utils/firebaseConfig";
import { ANALYTICS_EVENTS } from "../../../utils/documents/enums";
import projectConfig from "../../../utils/data/project.config";

function BackgroundSettings() {
	const current_settings = useSelector((state) => state.settingsState);
	const dispatch = useDispatch();
	const changeWallpaper = (wallpaperId) => {
		if (projectConfig.enableAnalytics) {
			firebase.analytics().logEvent(ANALYTICS_EVENTS.BACKGROUND_CHANGE, {
				wallpaper_Id: wallpaperId,
			});
		}
		dispatch(changeDesktopBackground(wallpaperId));
	};

	return (
		<div>
			<p className="uk-text-lead font-color-white">
				Change Desktop Background :
			</p>
			<div className="uk-child-width-1-2@m" uk-grid={"true"}>
				{settings.desktop_wallpapers.map((wallpaper, index) => {
					return (
						<div key={index}>
							<div
								style={{
									backgroundImage: `url(${wallpaper.value})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center center",
								}}
								className="wallpaper-thumbnail uk-card uk-card-body"
								onClick={() => changeWallpaper(wallpaper.id)}
							>
								{current_settings.currentWallpaperId ===
									wallpaper.id && (
									<div className="uk-position-top-right uk-padding-small">
										<img
											src={checked}
											width="40"
											height="40"
											alt="Selected"
										/>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default BackgroundSettings;
