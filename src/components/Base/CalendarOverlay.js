import { Separator } from "@fluentui/react";
import React from "react";
import Clock from "react-live-clock";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarOverlay() {
	return (
		<div
			id="calendar-expanded"
			uk-offcanvas="overlay: false; flip:true"
			className="uk-padding-remove"
		>
			<div className="uk-offcanvas-bar action-center">
				<h1 className="uk-padding-remove uk-margin-remove">
					<Clock format="HH:mm:ss" ticking={true} />
				</h1>
				<p className="uk-padding-remove uk-margin-remove">
					<Clock format={"DD MMMM YYYY"} ticking={true} />
				</p>
				<Separator />
				<Calendar />
			</div>
		</div>
	);
}

export default CalendarOverlay;
