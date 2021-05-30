import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDesktopBackground } from "../../../utils/actions/settingsStateAction";
import settings from "../../../utils/Data/settings.config";
import checked from "../../../assets/images/baseImages/checked.svg";
import "./settings.scss";

function BackgroundSettings() {
	const current_settings = useSelector((state) => state.settingsState);
	const dispatch = useDispatch();
	const changeWallpaper = (wallpaperId) => {
		dispatch(changeDesktopBackground(wallpaperId));
	};

	return (
		<div>
			<p className="uk-text-lead font-color-white">
				Change Desktop Background :
			</p>
			<div class="uk-child-width-1-2@m" uk-grid={"true"}>
				{settings.desktop_wallpapers.map((wallpaper, index) => {
					return (
						<div>
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
