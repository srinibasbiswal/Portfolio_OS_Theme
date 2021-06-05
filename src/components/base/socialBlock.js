import React from "react";
import user from "../../utils/data/user.config";
import twitter from "../../assets/images/social/twitter.svg";
import linkedin from "../../assets/images/social/linkedin.svg";
import github from "../../assets/images/social/github.svg";
import email from "../../assets/images/social/email.png";
import firebase from "../../utils/firebaseConfig";
import { ANALYTICS_EVENTS } from "../../utils/documents/enums";
import projectConfig from "../../utils/data/project.config";

function SocialBlock() {
	const onSocialClick = (social) => {
		if (projectConfig.enableAnalytics) {
			firebase.analytics().logEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, {
				link: social,
			});
		}
		window.open(social, "_blank");
	};

	return (
		<div>
			{user.gitHub !== undefined &&
				user.gitHub !== null &&
				user.gitHub !== "" && (
					<img
						src={github}
						width="40"
						height="40"
						alt="Github Icon"
						className="uk-img uk-margin-small-right uk-link"
						uk-tooltip="GitHub"
						onClick={() =>
							onSocialClick("https://github.com/" + user.gitHub)
						}
					/>
				)}
			{user.twitter !== undefined &&
				user.twitter !== null &&
				user.twitter !== "" && (
					<img
						src={twitter}
						width="40"
						height="40"
						alt="Twitter Icon"
						uk-tooltip="Twitter"
						className="uk-img uk-margin-small-right uk-link"
						onClick={() =>
							onSocialClick("https://twitter.com/" + user.twitter)
						}
					/>
				)}
			{user.linkedIn !== undefined &&
				user.linkedIn !== null &&
				user.linkedIn !== "" && (
					<img
						src={linkedin}
						width="40"
						height="40"
						alt="LinkedIn Icom"
						uk-tooltip="LinkedIn"
						className="uk-img uk-margin-small-right uk-link"
						onClick={() =>
							onSocialClick(
								"https://www.linkedin.com/" + user.linkedIn
							)
						}
					/>
				)}
			{user.email !== undefined &&
				user.email !== null &&
				user.email !== "" && (
					<img
						src={email}
						width="40"
						height="40"
						alt="Mail Icom"
						uk-tooltip="Mail Me"
						className="uk-img uk-margin-small-right uk-link"
						onClick={() => onSocialClick("mailto:" + user.email)}
					/>
				)}
		</div>
	);
}

export default SocialBlock;
