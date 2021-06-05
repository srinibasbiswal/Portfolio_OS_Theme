import React from "react";
import "./loading.scss";

function Loading() {
	// https://codepen.io/Mobius1/pen/aNVyzp
	return (
		<div className="screenHeight uk-background-primary">
			<div class="wrapper uk-position-center uk-text-center">
				<div class="loader uk-margin-small-left">
					<span class="pip-0"></span>
					<span class="pip-1"></span>
					<span class="pip-2"></span>
					<span class="pip-3"></span>
					<span class="pip-4"></span>
					<span class="pip-5"></span>
				</div>
				<h1 className="font-color-white">Loading...</h1>
			</div>
		</div>
	);
}

export default Loading;
