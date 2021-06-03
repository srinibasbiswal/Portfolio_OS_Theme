import { IconButton } from "@fluentui/react";
import React from "react";
import windows_10 from "../assets/images/baseImages/windows_10.svg";
import { useDispatch } from "react-redux";
import { setSystemState } from "../utils/actions/system.action";
import SocialBlock from "../components/base/socialBlock";

function ShutDown() {
	const dispatch = useDispatch();
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	return (
		<div className="screenHeight uk-background-secondary">
			<div className="uk-position-center uk-flex uk-flex-column uk-text-center">
				<div>
					<img
						src={windows_10}
						width="200"
						height="200"
						alt="Windows Icon"
						className="uk-img uk-margin-small-right"
					/>
				</div>
				<div>
					<IconButton
						iconProps={{ iconName: "PowerButton" }}
						title="Power On"
						ariaLabel="Power On"
						className="power-button"
						onClick={() => setNextSystemState("isLocked")}
					/>
				</div>
			</div>
			<div className="uk-position-bottom-center">
				<SocialBlock />
			</div>
		</div>
	);
}

export default ShutDown;
