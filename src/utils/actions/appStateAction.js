import { ACTION_TYPES } from "../Documents/enums";

export const initApplications = () => {
	return {
		type: ACTION_TYPES.APP_INIT,
	};
};
