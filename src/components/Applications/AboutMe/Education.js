import React from "react";
import user from "../../../utils/Data/user.config";

function Education() {
	return (
		<div>
			<div className="uk-width-1-1 uk-padding">
				<div class="container uk-margin-medium-left">
					{user.education.map((education, index) => {
						return (
							<div class="timeline-block timeline-block-right">
								<div class="marker"></div>
								<div class="timeline-content">
									<p className="uk-text-lead font-color-white">
										{education.instituteName}
									</p>
									<span>{education.year}</span>
									<p className="positon-desc">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit
										in voluptate.
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Education;
