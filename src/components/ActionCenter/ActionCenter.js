import React from "react";
import "./ActionCenter.scss";

function ActionCenter() {
	return (
		<div id="action-center" uk-offcanvas="overlay: false; flip:true">
			<div class="uk-offcanvas-bar action-center"></div>
		</div>
	);
}

export default ActionCenter;
