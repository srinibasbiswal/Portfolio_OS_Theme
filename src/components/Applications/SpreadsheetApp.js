import React from "react";
import Spreadsheet from "react-spreadsheet";

function SpreadsheetApp() {
	const data = () => {
		var data = [];
		for (let i = 0; i < 100; i++) {
			data.push([
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
				{ value: "" },
			]);
		}
		return data;
	};
	return (
		<div className="height-100 ">
			<Spreadsheet data={data()} />
		</div>
	);
}

export default SpreadsheetApp;
