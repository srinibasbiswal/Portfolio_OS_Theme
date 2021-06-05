import { Icon, MessageBar, MessageBarType, TextField } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import "./application.scss";
import firebase from "../../utils/firebaseConfig";
import { ANALYTICS_EVENTS } from "../../utils/documents/enums";
import projectAnalytics from "../../utils/data/project.config";

function Mail() {
	useEffect(() => {
		window.emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
	});
	const [emailResponse, setEmailResponse] = useState({
		template: {
			from: "",
			subject: "",
			message: "",
			response: "",
		},
	});

	const handleChange = (event) => {
		const target = event.target;
		var templateMeta = emailResponse.template;
		templateMeta[target.name] = target.value;
		setEmailResponse({ template: templateMeta });
		console.log(emailResponse);
	};

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			event.stopPropagation();
			const templateId = "from_website";
			let templateParams = {
				message: emailResponse.template.message,
				subject: emailResponse.template.subject,
				from: emailResponse.template.from,
			};
			console.log(templateParams);
			if (projectAnalytics.enableAnalytics) {
				firebase.analytics().logEvent(ANALYTICS_EVENTS.SEND_MAIL, {
					template: templateParams,
				});
			}
			sendFeedback(templateId, templateParams);
		}
	};

	const sendFeedback = (templateId, variables) => {
		window.emailjs
			.send("default_service", templateId, variables)
			.then((res) => {
				var templateMeta = {
					from: "",
					subject: "",
					message: "",
					response: (
						<MessageBar
							messageBarType={MessageBarType.success}
							isMultiline={true}
							dismissButtonAriaLabel="Close"
						>
							Message sent successfully.
						</MessageBar>
					),
				};
				setEmailResponse({ template: templateMeta });
				console.log(emailResponse);
			})
			.catch((err) => {
				console.error(
					"Oh well, message sending failed. Here some thoughts on the error that occured:",
					err
				);
				var templateMeta = emailResponse.template;
				templateMeta.response = (
					<MessageBar
						messageBarType={MessageBarType.error}
						isMultiline={true}
						dismissButtonAriaLabel="Close"
					>
						Sorry! Couldn't send the message. Please try some other
						medium.
					</MessageBar>
				);
				setEmailResponse({ template: templateMeta });
			});
	};

	return (
		<div className="height-100">
			<form onSubmit={handleSubmit}>
				<div className="uk-margin form-input uk-flex  uk-flex-right">
					<button className="discard-button uk-button uk-margin-small-right uk-background-secondary font-color-white">
						<Icon iconName="Delete" />
						Discard
					</button>
					<button
						className="uk-button uk-button-primary"
						type="submit"
					>
						<Icon iconName="Send" /> Send
					</button>
				</div>
				{emailResponse.template.response}
				<div className="uk-margin form-input">
					<TextField
						label="From :"
						name="from"
						underlined
						required
						placeholder="Your Email / Name"
						value={emailResponse.template.from}
						onChange={handleChange}
					/>
				</div>
				<div className="uk-margin form-input">
					<TextField
						label="To :"
						underlined
						disabled
						placeholder="Srinibas Biswal (srinibasbiswal02@gmail.com)"
					/>
				</div>
				<div className="uk-margin form-input">
					<TextField
						label="Subject :"
						underlined
						name="subject"
						required
						placeholder="here goes the subject"
						value={emailResponse.template.subject}
						onChange={handleChange}
					/>
				</div>
				<div className="uk-margin form-input message-box">
					<TextField
						multiline
						autoAdjustHeight
						placeholder="Write your message / feedback here."
						name="message"
						rows={10}
						value={emailResponse.template.message}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default Mail;
