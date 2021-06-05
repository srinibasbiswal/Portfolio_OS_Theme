import { ACTION_TYPES } from "../documents/enums";

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

export const handleAppFunctions = (app, type) => {
	return {
		type: type,
		app: app,
	};
};
