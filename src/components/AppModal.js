import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Modal } from 'react-bootstrap';
import AppExplorerTopPanel from './AppExplorerTopPanel';
import AppExplorerSidePanel from './AppExplorerSidePanel';
import AppExplorerStaticTop from './AppExplorerStaticTop';
import AppExplorerDataPanel from './AppExplorerDataPanel';


function AppModal(props) {

	const styleRules = { zIndex: props.zindexvalue };
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

					<AppExplorerStaticTop {...props}></AppExplorerStaticTop>

					<div className={` ${styles.OffWhite} ${styles.SmallFont} flex-fill`}>

						<AppExplorerTopPanel {...props} ></AppExplorerTopPanel>

						<AppExplorerDataPanel {...props}></AppExplorerDataPanel>

					</div>

					<Modal.Footer className={`mt-auto ${styles.OffWhite} ${styles.SmallFont}`}>
					</Modal.Footer>

				</div>

			</Modal.Body>

		</Modal >
	);
}

export default AppModal;
