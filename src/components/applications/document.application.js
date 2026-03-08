import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "./document.application.scss";

function Word() {
	const { quill, quillRef } = useQuill({
		theme: "snow",
		placeholder: "Start typing your document...",
	});

	return (
		<div className="word-editor-wrapper height-100 uk-background-muted">
			<div ref={quillRef} className="word-editor" />
			{!quill && <div className="word-loading">Loading editor...</div>}
		</div>
	);
}

export default Word;
