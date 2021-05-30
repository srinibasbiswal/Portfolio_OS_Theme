import { combineReducers, createStore } from "redux";
import systemStateReducer from "./reducers/systemStateReducer";
import appStateReducer from "./reducers/appStateReducer";
import settingsStateReducer from "./reducers/settingsStateReducer";

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
