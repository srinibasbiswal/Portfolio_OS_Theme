import React from "react";
import "./About.scss";
import user from "../../../utils/Data/user.config";
import {
	DirectionalHint,
	IconButton,
	TooltipDelay,
	TooltipHost,
} from "@fluentui/react";

function Projects() {
	return (
		<div>
			{user.projects.map((project, index) => {
				return (
					<div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-border-rounded project-card uk-shadow-large uk-margin">
						<h3 className="uk-card-title font-color-white">
							{project.projectName}
							<TooltipHost
								content="View Project"
								delay={TooltipDelay.zero}
								directionalHint={DirectionalHint.bottomCenter}
							>
								<IconButton
									iconProps={{
										iconName: "NavigateExternalInline",
									}}
									className="link-to-project"
								/>
							</TooltipHost>
						</h3>
						<p>{project.description}</p>

						<p>
							{project.madeWith.map((stack, stackIndex) => {
								return (
									<span className="uk-badge uk-padding-small uk-background-secondary">
										{stack}
									</span>
								);
							})}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default Projects;
