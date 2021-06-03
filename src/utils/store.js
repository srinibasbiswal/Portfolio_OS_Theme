import { combineReducers, createStore } from "redux";
import systemStateReducer from "./reducers/system.reducer";
import appStateReducer from "./reducers/app.reducer";
import settingsStateReducer from "./reducers/settings.reducer";

const rootReducer = combineReducers({
	systemState: systemStateReducer,
	appState: appStateReducer,
	settingsState: settingsStateReducer,
});

// Remove window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() in Prod env
export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
