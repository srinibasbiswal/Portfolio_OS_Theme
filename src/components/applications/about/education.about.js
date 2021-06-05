import React from "react";
import user from "../../../utils/data/user.config";

function Education() {
	return (
		<div>
			<div className="uk-width-1-1 uk-padding">
				<div className="container uk-margin-medium-left">
					{user.education.map((education, index) => {
						return (
							<div className="timeline-block " key={index}>
								<div className="marker"></div>
								<div className="timeline-content">
									<p className="uk-text-lead font-color-white">
										{education.instituteName}
									</p>
									<span>{education.year}</span>
									<p className="positon-desc">
										<p className="positon-desc">
											{education.degree}
										</p>
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
