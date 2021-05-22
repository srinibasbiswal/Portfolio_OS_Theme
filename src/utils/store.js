import { combineReducers, createStore } from "redux";
import systemStateReducer from "./reducers/systemStateReducer";

const rootReducer = combineReducers({
	systemState: systemStateReducer,
});

// Remove window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() in Prod env
export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
