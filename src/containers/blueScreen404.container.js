import React from "react";
import { Link } from "react-router-dom";
import scanCode from "../assets/images/baseImages/scanCode.png";

function BlueScreen404() {
	return (
		<div className="blue-screen screenHeight">
			<div className="uk-padding-large uk-margin-large-left uk-width-1-1 font-color-white">
				<h1 className="uk-heading-large font-color-white">:(</h1>
				<p className="uk-text-lead uk-width-2-3@m font-color-white">
					This virtual PC ran into a problem. You weren't supposed to
					come here. We're just collecting some error info. You can{" "}
					<Link to="/" className="font-color-white">
						<u>Click Here</u>
					</Link>{" "}
					to go back.
				</p>
				<p className="uk-text-large">100% complete.</p>
				<div className="uk-flex">
					<div className="uk-card uk-card-body">
						<img
							src={scanCode}
							width="150"
							height="150"
							alt="QR Code"
						/>
					</div>
					<div className="uk-card uk-card-body">
						<p>
							Let's go back.{" "}
							<Link to="/" className="font-color-white">
								<u>Click Here</u>
							</Link>{" "}
							<br /> <br />
							If you call a support person, give them this info:
							<br />
							Stop Code: 404 PAGE NOT FOUND
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlueScreen404;
