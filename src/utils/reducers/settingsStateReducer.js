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
		default:
			return state;
	}
};

export default settingsStateReducer;
