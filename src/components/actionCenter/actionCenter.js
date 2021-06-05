import { Icon } from "@fluentui/react";
import React from "react";
import { useSelector } from "react-redux";
import "./actionCenter.scss";
import { useDispatch } from "react-redux";
import { toggleSettings } from "../../utils/actions/settingsaction";
import { ACTION_TYPES } from "../../utils/documents/enums";
import JIOSaavn from "../applications/jiosaavn.application";

function ActionCenter() {
	const settings = useSelector((state) => state.settingsState);
	const dispatch = useDispatch();
	const handleSettingsClick = (type) => {
		dispatch(toggleSettings(type));
	};

	return (
		<div id="action-center" uk-offcanvas="overlay: false; flip:true">
			<div className="uk-offcanvas-bar action-center">
				<div>
					<JIOSaavn />
				</div>
				<div className="uk-position-bottom uk-flex uk-margin-medium-bottom">
					{/* Wifi Button */}
					<div
						className={
							"uk-card uk-card-default uk-width-1-3 action-center-btn uk-margin-small-right" +
							(settings.wifiEnabled ? " settings-active" : "")
						}
						onClick={() =>
							handleSettingsClick(ACTION_TYPES.TOGGLE_WIFI)
						}
					>
						{settings.wifiEnabled && (
							<Icon
								iconName="WifiEthernet"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}
						{!settings.wifiEnabled && (
							<Icon
								iconName="WifiWarning4"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}

						<span className="uk-position-bottom-left uk-margin-small-left uk-text-small">
							Wifi
						</span>
					</div>

					{/* Mute Button */}
					<div
						className={
							"uk-card uk-card-default uk-width-1-3 action-center-btn uk-margin-small-right" +
							(settings.isMute ? " settings-active" : "")
						}
						onClick={() =>
							handleSettingsClick(ACTION_TYPES.TOGGLE_MUTE)
						}
					>
						{settings.isMute && (
							<Icon
								iconName="VolumeDisabled"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}
						{!settings.isMute && (
							<Icon
								iconName="Volume3"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}

						<span className="uk-position-bottom-left uk-margin-small-left uk-text-small">
							Sound
						</span>
					</div>

					{/* Airplane Mode */}
					<div
						className={
							"uk-card uk-card-default uk-width-1-3 action-center-btn uk-margin-small-right" +
							(settings.airplaneMode ? " settings-active" : "")
						}
						onClick={() =>
							handleSettingsClick(
								ACTION_TYPES.TOGGLE_AIRPLANE_MODE
							)
						}
					>
						{settings.airplaneMode && (
							<Icon
								iconName="Airplane"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}
						{!settings.airplaneMode && (
							<Icon
								iconName="Airplane"
								className="uk-position-top-left uk-margin-small-left"
							/>
						)}

						<span className="uk-position-bottom-left uk-margin-small-left uk-text-small">
							Airplane Mode
						</span>
					</div>

					{/* Settings */}
					<div className="uk-card uk-card-default uk-width-1-3 action-center-btn uk-margin-small-right">
						<Icon
							iconName="Settings"
							className="uk-position-top-left uk-margin-small-left"
						/>

						<span className="uk-position-bottom-left uk-margin-small-left uk-text-small">
							Settings
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ActionCenter;
