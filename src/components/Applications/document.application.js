import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function Word() {
	const { quillRef } = useQuill();

	return (
		<div className="height-100 uk-background-muted">
			<div ref={quillRef} />
		</div>
	);
}

export default Word;
