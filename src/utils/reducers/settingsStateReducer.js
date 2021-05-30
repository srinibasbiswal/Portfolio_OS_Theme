import { ACTION_TYPES } from "../Documents/enums";
import SettingDocument from "../Documents/SettingsDocument";

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
		default:
			return state;
	}
};

export default settingsStateReducer;
