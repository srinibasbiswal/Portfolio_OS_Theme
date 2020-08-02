import React from 'react';
import CloseIcon from '../assets/images/CloseIcon.png';
import MaximizeIcon from '../assets/images/MaximizeIcon.png';
import MinimizeIcon from '../assets/images/MinimizeIcon.png';
import DocumentIcon from '../assets/images/DocumentsIcon.png';
import styles from '../stylesheets/style.module.css';
import { Image } from 'react-bootstrap';

function AppExplorerStaticTop(props) {

    return (

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


    );
}

export default AppExplorerStaticTop;
