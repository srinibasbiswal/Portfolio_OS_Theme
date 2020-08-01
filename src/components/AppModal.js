import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Modal, Button, Image } from 'react-bootstrap';
import CloseIcon from '../assets/images/CloseIcon.png';
import MaximizeIcon from '../assets/images/MaximizeIcon.png';
import MinimizeIcon from '../assets/images/MinimizeIcon.png';
import DocumentIcon from '../assets/images/DocumentsIcon.png'

function AppModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			backdrop="static"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<div className={`${styles.AppExplorerStaticTop}`}>
				<div class="d-flex bd-highlight">
  					<div className="mr-auto bd-highlight">
						<Image
							width={25}
							height={25}
							alt="AppExplorerName"
							src={DocumentIcon}
							className={`m-0 p-0`}
						></Image>
						<span className={`font-weight-normal m-3`}>
							App Explorer Title
						</span>
					</div>
  					<div>
					  	<Image className={styles.hoverPointer}
							width={25}
							height={25}
							alt="MinimizeIcon"
							src={MinimizeIcon}
						></Image>
					</div>
					<div>
						<Image className={styles.hoverPointer}
							width={25}
							height={25}
							alt="MaximizeIcon"
							src={MaximizeIcon}
						></Image>
					</div>
					<div>
						<Image onClick={props.onHide} className={styles.hoverPointer}
							width={25}
							height={25}
							alt="CloseIcon"
							src={CloseIcon}
						></Image>
  					</div>
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
