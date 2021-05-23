import { ACTION_TYPES } from "../Documents/enums";

export const initApplications = () => {
	return {
		type: ACTION_TYPES.APP_INIT,
	};
};

export const handleApplicationClick = (app) => {
	return {
		type: ACTION_TYPES.APP_CLICK,
		app: app,
	};
};
