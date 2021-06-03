import { PrimaryButton } from "@fluentui/react";
import React from "react";
import user from "../../../utils/data/user.config";

function Resume() {
	const downloadIcon = { iconName: "DownloadDocument" };
	const onDownloadClick = (resume) => {
		window.open(resume, "_blank");
	};

	return (
		<div>
			<div className="uk-text-center">
				<PrimaryButton
					iconProps={downloadIcon}
					onClick={() => onDownloadClick(user.resume)}
				>
					Download Resume
				</PrimaryButton>
				<object
					data={user.resume}
					type="application/pdf"
					width="100%"
					height="100%"
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
