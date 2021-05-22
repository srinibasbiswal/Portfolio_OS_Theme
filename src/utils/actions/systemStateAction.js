import { ACTION_TYPES } from "../Documents/enums";

export const setSystemState = (systemState) => {
	return {
		type: ACTION_TYPES.SET_STATE,
		systemState: systemState,
	};
};
