import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Modal, Image } from 'react-bootstrap';
import CloseIcon from '../assets/images/CloseIcon.png';
import MaximizeIcon from '../assets/images/MaximizeIcon.png';
import MinimizeIcon from '../assets/images/MinimizeIcon.png';
import DocumentIcon from '../assets/images/DocumentsIcon.png';
import AppExplorerTopPanel from './AppExplorerTopPanel';
import AppExplorerSidePanel from './AppExplorerSidePanel';


function AppModal(props) {

	const styleRules = { zIndex: props.zIndexValue };
	return (
		<Modal
			{...props}
			size="lg"
			backdrop={false}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			keyboard={false}
			className={`${styles.modalOverride}`}
			style={styleRules}
		>
			<Modal.Body className={`${styles.noPadding} d-flex`}>
				<AppExplorerSidePanel {...props}></AppExplorerSidePanel>

				<div className={`flex-fill d-flex flex-column`}>
					<div className={`${styles.AppExplorerStaticTop} ${styles.BackgroundBlur} ${styles.roundedTopRight}`}>
						<div class="d-flex bd-highlight">
							<div className={`mr-auto bd-highlight ${styles.AppExplorerTitle} ${styles.OffWhite} ${styles.SmallFont}`}>
								<Image
									width={25}
									height={25}
									alt="AppExplorerName"
									src={DocumentIcon}
									className={`m-2 p-0`}
								></Image>
								<span className={`font-weight-normal m-1`}>
									App Explorer Title
						</span>
							</div>
							<div>
								<Image className={`${styles.hoverPointer} mt-1`}
									width={30}
									height={30}
									alt="MinimizeIcon"
									src={MinimizeIcon}
								></Image>
							</div>
							<div>
								<Image className={`${styles.hoverPointer} mt-1`}
									width={30}
									height={30}
									alt="MaximizeIcon"
									src={MaximizeIcon}
								></Image>
							</div>
							<div>
								<Image onClick={props.onHide} className={`${styles.hoverPointer} mt-1`}
									width={30}
									height={30}
									alt="CloseIcon"
									src={CloseIcon}
								></Image>
							</div>
						</div>
					</div>

					<div className={` ${styles.OffWhite} ${styles.SmallFont} flex-fill`}>
						<AppExplorerTopPanel {...props} ></AppExplorerTopPanel>
						<div>
							{props.modaldetails.data}
						</div>
					</div>
					<Modal.Footer className={`mt-auto ${styles.OffWhite} ${styles.SmallFont}`}>
					</Modal.Footer>
				</div>

			</Modal.Body>

		</Modal >
	);
}

export default AppModal;
