import React, { useState } from "react";
import avatar from "../../../assets/images/baseImages/default_avatar.svg";
import user from "../../../utils/Data/user.config";

function AboutMe() {
	return (
		<div>
			<div class="uk-card uk-text-center font-color-white">
				<div class="uk-width-auto">
					<img
						class="uk-border-circle"
						width="120"
						height="120"
						src={avatar}
					/>
					<p className="uk-text-lead uk-margin-remove-bottom font-color-white">
						Hey, I'm {user.firstName} {user.lastName}
					</p>
					{user.aboutMe.intro && (
						<p className="uk-margin-remove-top font-color-white ">
							{user.aboutMe.intro}
						</p>
					)}
				</div>
				{user.aboutMe.description && (
					<div class="uk-margin-remove">
						{user.aboutMe.description}
					</div>
				)}

				{user.aboutMe.outro && (
					<div class=" uk-margin-medium-top">
						{user.aboutMe.outro}
					</div>
				)}
			</div>
		</div>
	);
}

export default AboutMe;
