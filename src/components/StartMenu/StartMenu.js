import { Icon, IconButton } from "@fluentui/react";
import { useConst, useBoolean } from "@fluentui/react-hooks";
import React from "react";
import "./StartMenu.scss";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSystemState } from "../../utils/actions/systemStateAction";
import user from "../../utils/Data/user.config";
import SocialBlock from "../Base/socialBlock";
import AppIcon from "../Base/AppIcon";

function StartMenu() {
	const [
		showPowerMenu,
		{ setTrue: onShowPowerMenu, setFalse: onHidePowerMenu },
	] = useBoolean(false);

	const dispatch = useDispatch();
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	const appState = useSelector((state) => state.appState);

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
				<div className="start-app-list uk-margin-large-top uk-margin-small-right">
					<ul className="uk-list start-menu-list">
						{appState.apps.map((app, index) => {
							return (
								<li className="start-menu-list-item uk-border-rounded">
									{app.icon != undefined &&
										app.icon != null &&
										app.icon != "" && (
											<img
												src={app.icon}
												width="40"
												height="40"
												alt={app.name}
												className="uk-img uk-margin-small-right"
											/>
										)}
									{app.name}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="start-tiles uk-background-secondary">
					<div className="profile-card uk-card uk-card-body uk-margin-large-top uk-margin-medium-left uk-margin-medium-right uk-border-rounded uk-text-center">
						{user.userImage != undefined &&
							user.userImage != null &&
							user.userImage != "" && (
								<img
									src={user.userImage}
									width="80"
									height="80"
									alt={user.firstName}
									className="uk-img profile-card-img"
								/>
							)}
						<p className="uk-text-center">Hi, {user.firstName}</p>
						<SocialBlock />
					</div>
					<div className="start-menu-tiles uk-card-body">
						{appState.apps.map((app, index) => {
							return <AppIcon appInfo={app} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartMenu;
