import React from "react";
import "./About.scss";
import avatar from "../../../assets/baseImages/default_avatar.svg";

function Experience() {
	return (
		<div>
			<div>
				<div className="uk-width-1-1 uk-padding">
					<div className="uk-flex">
						<img
							class="uk-border-circle"
							width="50"
							height="50"
							src={avatar}
						/>
						<p className="uk-text-large uk-margin-small-left">
							KloudGin
						</p>
					</div>

					<div class="container uk-margin-medium-left">
						<div class="timeline-block timeline-block-right">
							<div class="marker"></div>
							<div class="timeline-content">
								<h3>First Year</h3>
								<span>Some work experience</span>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate.
								</p>
							</div>
						</div>

						<div class="timeline-block timeline-block-right">
							<div class="marker"></div>
							<div class="timeline-content">
								<h3>Third Year</h3>
								<span>Some work experience</span>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default Experience;
