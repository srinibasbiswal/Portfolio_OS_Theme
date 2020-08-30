import React, { useState, useEffect } from 'react';
import styles from '../stylesheets/style.module.css';
import { Modal } from 'react-bootstrap';
import AppExplorerTopPanel from './AppExplorerTopPanel';
import AppExplorerSidePanel from './AppExplorerSidePanel';
import AppExplorerStaticTop from './AppExplorerStaticTop';
import AppExplorerDataPanel from './AppExplorerDataPanel';


function AppModal(props) {
	const styleRules = { zIndex: props.zindexvalue };

	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	  });
	
	  useEffect(() => {
		  setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		  });
	}, []);

	console.log(windowSize.height , windowSize.width)

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
			<Modal.Body className={`${styles.noPadding} ${styles.modalBodyOverRide} d-flex`}>

				{windowSize.width != undefined && windowSize.width > 800 
					? <AppExplorerSidePanel {...props}></AppExplorerSidePanel>
					: null
				}

				<div className={`flex-fill d-flex flex-column`}>

					<AppExplorerStaticTop {...props}></AppExplorerStaticTop>

					<div className={` ${styles.OffWhite} ${styles.SmallFont}  ${styles.ModalDataPanel} flex-fill `}>

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
