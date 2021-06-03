import React from "react";
import user from "../../../utils/data/user.config";

function Education() {
	return (
		<div>
			<div className="uk-width-1-1 uk-padding">
				<div className="container uk-margin-medium-left">
					{user.education.map((education, index) => {
						return (
							<div className="timeline-block timeline-block-right">
								<div className="marker"></div>
								<div className="timeline-content">
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