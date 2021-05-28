import React from "react";
import user from "../../../utils/Data/user.config";

function Skills() {
	return (
		<div
			class="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid-match"
			uk-grid={"true"}
		>
			{user.skills.map((skill, index) => {
				return (
					<div>
						<div class="uk-card uk-card-default uk-card-body uk-border-rounded project-card uk-shadow-large">
							<p className=" font-color-white">{skill.name}</p>
							<div>
								{skill.values.map((value, valIndex) => {
									return (
										<span class="uk-badge uk-padding-small uk-background-secondary uk-margin-small">
											{value}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Skills;
