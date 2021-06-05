import React from "react";
import Clock from "react-live-clock";
import "./base.scss";

function ClockComponent() {
	return (
		<div
			className="uk-flex uk-flex-column taskbar-clock uk-text-center taskbar-icon uk-padding-small uk-padding-remove-vertical"
			uk-toggle="target: #calendar-expanded"
		>
			<div className="clock-timer">
				<Clock format={"h:mm A"} ticking={true} />
			</div>
			<div className="clock-timer">
				<Clock format={"DD-MM-YYYY"} />
			</div>
		</div>
	);
}

export default ClockComponent;
