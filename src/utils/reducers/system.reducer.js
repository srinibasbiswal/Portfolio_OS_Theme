import { ACTION_TYPES } from "../documents/enums";
import SystemStateDocument from "../documents/system.document";

const initialSystemState = new SystemStateDocument();

const systemStateReducer = (state = initialSystemState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_STATE:
			var newSystemState = new SystemStateDocument();
			newSystemState.isLocked = false;
			newSystemState[action.systemState] = true;
			return {
				...state,
				isLocked: newSystemState.isLocked,
				isShutDown: newSystemState.isShutDown,
				isDesktop: newSystemState.isDesktop,
			};
		default:
			return state;
	}
};

export default systemStateReducer;
