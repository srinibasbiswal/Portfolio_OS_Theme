import { IconButton, Modal, TooltipHost } from "@fluentui/react";

import React from "react";

function Credits(props) {
	const cancelIcon = { iconName: "Cancel" };
	const navigate = (link) => {
		window.open(link, "_blank");
	};
	return (
		<Modal
			isOpen={props.isModalOpen}
			onDismiss={props.hideModal}
			isBlocking={false}
		>
			<div class="uk-card uk-card-default uk-card-body uk-border-rounded">
				<h3 class="uk-card-title">Credits</h3>
				<p>
					<table class="uk-table">
						<tbody>
							<tr>
								<td>Framework : </td>
								<td>
									<span
										onClick={() =>
											navigate("https://getuikit.com/")
										}
									>
										UIKit
									</span>
									{" ,"}{" "}
									<span
										onClick={() =>
											navigate(
												"https://developer.microsoft.com/en-us/fluentui#/"
											)
										}
									>
										Fluent UI
									</span>
								</td>
							</tr>
							<tr>
								<td>Icons: </td>
								<td>
									<span
										onClick={() =>
											navigate("https://icons8.com/")
										}
									>
										Icons8
									</span>
								</td>
							</tr>
							<tr>
								<td>Apps Plugins: </td>
								<td>
									<span
										onClick={() =>
											navigate("https://quilljs.com/")
										}
									>
										Quill.js
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-spreadsheet"
											)
										}
									>
										React Spreadsheet
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.jiosaavn.com/"
											)
										}
									>
										JioSaavn
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://github.com/conwnet/github1s"
											)
										}
									>
										Github1s
									</span>
								</td>
							</tr>
							<tr>
								<td>Other Plugins : </td>
								<td>
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-draggable"
											)
										}
									>
										React Draggable
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-contexify"
											)
										}
									>
										ContextMenu
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-live-clock"
											)
										}
									>
										React Live Clock
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</p>
				<IconButton
					iconProps={cancelIcon}
					ariaLabel="Close popup modal"
					onClick={props.hideModal}
					className="uk-position-top-right"
				/>
				<div class="uk-card-footer uk-text-center">
					<p>
						Made with{" "}
						<TooltipHost
							content="Nobody : ... ;
							Michael : That's what she said !"
						>
							<span className="font-color-red font-size-medium">
								&hearts;{" "}
							</span>
						</TooltipHost>
						by Srinibas Biswal
					</p>
				</div>
			</div>
		</Modal>
	);
}

export default Credits;
