import { IconButton, TextField } from "@fluentui/react";
import React, { useState } from "react";

function Chrome() {
	const [urlToShow, seturlToShow] = useState("https://www.google.com/");
	const [url, seturl] = useState("https://www.google.com/webhp?igu=1");
	const onURLChange = (event) => {
		const target = event.target;
		seturlToShow(target.value);
	};

	const onGO = () => {
		seturl(urlToShow);
	};

	return (
		<div className="height-100">
			<div>
				<div className="app-nav-bar uk-padding-small uk-flex">
					<IconButton
						iconProps={{ iconName: "Back" }}
						title="Back"
						ariaLabel="Back"
					/>
					<IconButton
						iconProps={{ iconName: "Forward" }}
						title="Forward"
						ariaLabel="Forward"
					/>
					<TextField
						className="uk-margin-small-right disabled-text-field uk-width-1-1"
						placeholder="Type a URL"
						value={urlToShow}
						onChange={onURLChange}
					/>
					<IconButton
						iconProps={{ iconName: "ChevronRightSmall" }}
						title="Go"
						ariaLabel="Go"
						onClick={() => onGO()}
					/>
				</div>
			</div>
			<iframe
				src={url}
				frameBorder="0"
				height="100%"
				width="100%"
				title="Chrome"
			></iframe>
		</div>
	);
}

export default Chrome;
