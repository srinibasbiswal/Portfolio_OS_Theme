import React from "react";
import "./LockScreen.scss";
import avatar from "../../assets/baseImages/default_avatar.svg";
import { Icon, PrimaryButton, TextField } from "@fluentui/react";

function SignInScreen() {
	return (
		<div className="screenHeight SignInOverlay">
			{/* Sign In Form */}
			<div className="uk-position-center uk-overlay uk-text-center">
				<div>
					<img
						className="uk-border-circle"
						src={avatar}
						width="200"
						height="200"
					/>
				</div>
				<div>
					<h1 className="uk-heading-small  font-color-white">
						Srinibas Biswal
					</h1>
				</div>
				<div>
					<TextField
						placeholder="Enter Any Pin"
						type="password"
						canRevealPassword
						revealPasswordAriaLabel="Show password"
					/>
				</div>
				<div className="uk-margin-small-top">
					<PrimaryButton text="Sign In" allowDisabledFocus />
				</div>
			</div>

			{/* LockScreenIcons */}
			<div className="uk-position-bottom-right uk-overlay uk-flex uk-flex-column">
				<div className="font-color-white uk-text-lead">
					<Icon iconName="WifiEthernet" />
				</div>
			</div>
		</div>
	);
}

export default SignInScreen;
