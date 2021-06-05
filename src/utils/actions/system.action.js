import { ACTION_TYPES } from "../documents/enums";

export const setSystemState = (systemState) => {
	return {
		type: ACTION_TYPES.SET_STATE,
		systemState: systemState,
	};
};
