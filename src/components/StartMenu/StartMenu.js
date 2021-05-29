import { Icon, IconButton } from "@fluentui/react";
import { useConst, useBoolean } from "@fluentui/react-hooks";
import React from "react";
import "./StartMenu.scss";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useDispatch } from "react-redux";
import { setSystemState } from "../../utils/actions/systemStateAction";

function StartMenu() {
	const [
		showPowerMenu,
		{ setTrue: onShowPowerMenu, setFalse: onHidePowerMenu },
	] = useBoolean(false);

	const dispatch = useDispatch();
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	const menuProps = useConst({
		shouldFocusOnMount: true,
		items: [
			{
				key: "lock",
				iconProps: { iconName: "Lock" },
				text: "Lock",
				onClick: () => setNextSystemState("isLocked"),
			},
			{
				key: "shutDown",
				iconProps: { iconName: "PowerButton" },
				text: "Shut Down",
				onClick: () => setNextSystemState("isShutDown"),
			},
		],
	});

	return (
		<div id="start-menu" uk-offcanvas="overlay: false">
			<div class="uk-offcanvas-bar start-menu uk-flex uk-padding-remove">
				<div className="start-quick-actions">
					<div className="uk-position-bottom">
						<ul class="uk-list uk-margin-remove">
							<li></li>
							<li></li>
							<li>
								<IconButton
									iconProps={{ iconName: "PowerButton" }}
									title="Power"
									ariaLabel="Power"
									className=" quick-action-button"
									menuProps={menuProps}
								/>
								{showPowerMenu && (
									<ContextMenu
										onShowPowerMenu={onShowPowerMenu}
										onHidePowerMenu={onHidePowerMenu}
									/>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className="start-app-list">a</div>
				<div className="start-tiles">a</div>
			</div>
		</div>
	);
}

export default StartMenu;
