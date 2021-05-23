import appConfig from "../Data/apps.config";
import AppStateDocument from "../Documents/AppStateDocument";
import { ACTION_TYPES } from "../Documents/enums";
import {
	filterObjectListById,
	replaceObjectListByKey,
} from "../services/common-util-servies";

const initialAppState = new AppStateDocument();

const appStateReducer = (state = [initialAppState], action) => {
	switch (action.type) {
		case ACTION_TYPES.APP_INIT:
			let appsList = appConfig;
			var apps = [];
			if (
				appsList !== undefined &&
				appsList !== null &&
				appsList.length > 0
			) {
				for (let i = 0; i < appsList.length; i++) {
					var newApp = new AppStateDocument();
					newApp.id = appsList[i].id;
					newApp.name = appsList[i].name;
					newApp.icon = appsList[i].icon;
					newApp.order = appsList[i].order;
					apps.push(newApp);
				}
			}
			return {
				apps,
			};
		case ACTION_TYPES.APP_CLICK:
			var currentAppState = filterObjectListById(
				state.apps,
				action.app.id
			);
			var apps = [];
			if (currentAppState.isOpened) {
				if (currentAppState.isMaximized) {
					currentAppState.isMaximized = false;
					currentAppState.isMinimized = true;
				} else {
					currentAppState.isMaximized = true;
					currentAppState.isMinimized = false;
				}
			} else {
				currentAppState.isMaximized = true;
				currentAppState.isOpened = true;
			}
			apps = replaceObjectListByKey(state.apps, currentAppState, "id");
			return {
				apps,
			};
		default:
			return state;
	}
};

export default appStateReducer;
