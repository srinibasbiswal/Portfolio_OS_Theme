import React from "react";
import "./loading.scss";

function Loading() {
	// https://codepen.io/Mobius1/pen/aNVyzp
	return (
		<div className="screenHeight uk-background-primary">
			<div className="wrapper uk-position-center uk-text-center">
				<div className="loader uk-margin-small-left">
					<span className="pip-0"></span>
					<span className="pip-1"></span>
					<span className="pip-2"></span>
					<span className="pip-3"></span>
					<span className="pip-4"></span>
					<span className="pip-5"></span>
				</div>
				<h1 className="font-color-white">Loading...</h1>
			</div>
		</div>
	);
}

export default Loading;
