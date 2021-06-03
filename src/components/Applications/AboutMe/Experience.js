import React from "react";
import "./About.scss";
import avatar from "../../../assets/images/baseImages/default_avatar.svg";
import user from "../../../utils/Data/user.config";

function Experience() {
	return (
		<div>
			{user.experiences.map((experience, index) => {
				return (
					<div className="uk-width-1-1 uk-padding">
						<div className="uk-flex">
							<img
								className="uk-border-circle"
								width="50"
								height="50"
								src={avatar}
								alt="org"
							/>
							<h3 className="uk-text-large uk-margin-small-left font-color-white">
								{experience.organization}
							</h3>
						</div>

						<div className="container uk-margin-medium-left">
							{experience.positions.map((position, posIndex) => {
								return (
									<div className="timeline-block timeline-block-right">
										<div className="marker"></div>
										<div className="timeline-content">
											<p className="uk-text-lead font-color-white">
												{position.positionName}
											</p>
											<span>
												{position.startDate} -
												{position.endDate}
											</span>
											<p className="positon-desc">
												Lorem ipsum dolor sit amet,
												consectetur adipisicing elit,
												sed do eiusmod tempor incididunt
												ut labore et dolore magna
												aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation
												ullamco laboris nisi ut aliquip
												ex ea commodo consequat. Duis
												aute irure dolor in
												reprehenderit in voluptate.
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Experience;
