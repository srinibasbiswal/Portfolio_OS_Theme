import React from "react";
import Draggable from "react-draggable";
import "./AppComponent.scss";

function AppComponent() {
	return (
		<Draggable
			axis={"both"}
			allowAnyClick={false}
			bounds={"parent"}
			position={null}
			grid={[1, 1]}
			scale={1}
		>
			<div className="app-component">
				<div>Geneic Modal</div>
			</div>
		</Draggable>
	);
}

export default AppComponent;
