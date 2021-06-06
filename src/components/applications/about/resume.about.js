import { PrimaryButton } from "@fluentui/react";
import React from "react";
import projectConfig from "../../../utils/data/project.config";
import user from "../../../utils/data/user.config";
import { ANALYTICS_EVENTS } from "../../../utils/documents/enums";
import firebase from "../../../utils/firebaseConfig";

function Resume() {
	const downloadIcon = { iconName: "DownloadDocument" };
	const onDownloadClick = (resume) => {
		if (projectConfig.enableAnalytics) {
			firebase.analytics().logEvent(ANALYTICS_EVENTS.DOWNLOAD_RESUME);
		}
		window.open(resume, "_blank");
	};
	return (
		<div className="height-100">
			<div className="uk-text-center height-100">
				<div>
					<PrimaryButton
						iconProps={downloadIcon}
						onClick={() => onDownloadClick(user.resume)}
					>
						Download Resume
					</PrimaryButton>
				</div>
				<object
					data={user.resume}
					type="application/pdf"
					className="height-100 uk-width-1-1 uk-margin-small-top"
				>
					<p className="font-color-white">
						Sorry Couldn't load the file.
					</p>
				</object>
			</div>
		</div>
	);
}

export default Resume;
