import React from "react";

function Word() {
	return (
		<div className="height-100">
			<iframe
				src="https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc"
				width="1366px"
				height="623px"
				frameborder="0"
			/>
			This is an embedded
			<a target="_blank" href="http://office.com">
				Microsoft Office
			</a>
			document, powered by
			<a target="_blank" href="http://office.com/webapps">
				Office Online
			</a>
			{/* <iframe
				src="https://office.live.com/start/word.aspx"
				frameBorder="0"
				height="100%"
				width="100%"
			></iframe> */}
		</div>
	);
}

export default Word;
