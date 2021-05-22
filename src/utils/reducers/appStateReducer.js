import apps from "../Data/apps.config";
import AppStateDocument from "../Documents/AppStateDocument";
import { ACTION_TYPES } from "../Documents/enums";

const initialAppState = new AppStateDocument();

const appStateReducer = (state = [initialAppState], action) => {
	switch (action.type) {
		case ACTION_TYPES.APP_INIT:
			let appsList = apps;
			var apps = [];
			if (
				appsList != undefined &&
				appsList != null &&
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
		default:
			return state;
	}
};

export default appStateReducer;
