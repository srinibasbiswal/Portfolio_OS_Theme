import settings from "../data/settings.config";
import { ACTION_TYPES } from "../documents/enums";
import SettingDocument from "../documents/settings.document";

const initialSettings = new SettingDocument();

const settingsStateReducer = (state = initialSettings, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_MUTE:
			return {
				...state,
				isMute: !state.isMute,
			};
		case ACTION_TYPES.TOGGLE_WIFI:
			return {
				...state,
				wifiEnabled: !state.wifiEnabled,
			};
		case ACTION_TYPES.TOGGLE_AIRPLANE_MODE:
			return {
				...state,
				airplaneMode: !state.airplaneMode,
			};
		case ACTION_TYPES.CHANGE_WALLPAPER:
			var newWallpaper = settings.desktop_wallpapers.filter(
				(wallpaper) => wallpaper.id === action.wallpaperId
			);
			return {
				...state,
				currentWallpaper:
					newWallpaper !== undefined && newWallpaper[0] !== undefined
						? newWallpaper[0].value
						: settings.default_wallpaper,
				currentWallpaperId:
					newWallpaper !== undefined && newWallpaper[0] !== undefined
						? newWallpaper[0].id
						: "default_wall",
			};
		default:
			return state;
	}
};

export default settingsStateReducer;
