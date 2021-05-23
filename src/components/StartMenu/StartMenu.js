import { Icon, IconButton } from "@fluentui/react";
import { useConst, useBoolean } from "@fluentui/react-hooks";
import React from "react";
import "./StartMenu.scss";
import ContextMenu from "../ContextMenu/ContextMenu";

function StartMenu() {
	const [
		showPowerMenu,
		{ setTrue: onShowPowerMenu, setFalse: onHidePowerMenu },
	] = useBoolean(false);

	const menuProps = useConst({
		shouldFocusOnMount: true,
		items: [
			{
				key: "lock",
				iconProps: { iconName: "Lock" },
				text: "Lock",
			},
			{
				key: "shutDown",
				iconProps: { iconName: "PowerButton" },
				text: "Shut Down",
			},
			{
				key: "reStart",
				iconProps: { iconName: "Refresh" },
				text: "restart",
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
