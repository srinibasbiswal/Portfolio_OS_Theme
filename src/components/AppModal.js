import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Modal, Button, Figure } from 'react-bootstrap';
import CloseIcon from '../assets/images/CloseIcon.png';
import MaximizeIcon from '../assets/images/MaximizeIcon.png';
import MinimizeIcon from '../assets/images/MinimizeIcon.png';

function AppModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			backdrop="static"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<div className={`${styles.modalStaticTopBar}`}>
				<div className={`d-flex flex-row-reverse bd-highlight`}>
					<Figure className={`bd-highlight`} onClick={props.onHide}>
						<Figure.Image
							width={25}
							height={25}
							alt="CloseIcon"
							src={CloseIcon}
						/>
					</Figure>
					<Figure className={`bd-highlight`}>
						<Figure.Image
							width={25}
							height={25}
							alt="MaximizeIcon"
							src={MaximizeIcon}
						/>
					</Figure>
					<Figure className={`bd-highlight`}>
						<Figure.Image
							width={25}
							height={25}
							alt="MinimizeIcon"
							src={MinimizeIcon}
						/>
					</Figure>
				</div>
			</div>
			<Modal.Header>

				<Modal.Title id="contained-modal-title-vcenter">
					{props.data}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4> {props.data}</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AppModal;
