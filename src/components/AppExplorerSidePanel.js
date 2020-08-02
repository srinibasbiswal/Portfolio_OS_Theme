import React from 'react';
import ImagesIcon from '../assets/images/ImagesIcon.svg';
import ThisPersonIcon from '../assets/images/BatmanEmojiIcon.png';
import DownloadFolderIcon from '../assets/images/DownloadFolderIcon.png';
import DocumentIcon from '../assets/images/DocumentsIcon.png';
import styles from '../stylesheets/style.module.css';
import { Image } from 'react-bootstrap';

function AppExplorerSidePanel(props) {
    if (props.modaldetails.sidePanel) {
        return (
            <div className={`${styles.AppExplorerSidePanel} ${styles.BackgroundBlur} ${styles.roundedTopLeft} ${styles.roundedBottomLeft}`}>
                <ul className={`list-group list-group-flush`}>
                    <li className={`${styles.bgTransparent}  list-group-item`}>
                        <Image
                            width={25}
                            height={25}
                            alt="AppExplorerName"
                            src={DocumentIcon}
                        ></Image>
                        <span className={`font-weight-normal m-2 ${styles.SmallFont}`}>
                            File Explorer
							</span>
                    </li>
                    <li className={`${styles.bgTransparent}  list-group-item`}>
                        <Image
                            width={25}
                            height={25}
                            alt="ThisPersonIcon"
                            src={ThisPersonIcon}
                        ></Image>
                        <span className={`font-weight-normal m-2 ${styles.SmallFont}`}>
                            This Person
							</span>
                    </li>
                    <li className={`${styles.bgTransparent}  list-group-item`}>
                        <Image
                            width={25}
                            height={25}
                            alt="DocumentsIcon"
                            src={DocumentIcon}
                        ></Image>
                        <span className={`font-weight-normal m-2 ${styles.SmallFont}`}>
                            Documents
							</span>
                    </li>
                    <li className={`${styles.bgTransparent}  list-group-item`}>
                        <Image
                            width={25}
                            height={25}
                            alt="PicturesIcon"
                            src={ImagesIcon}
                        ></Image>
                        <span className={`font-weight-normal m-2 ${styles.SmallFont}`}>
                            Pictures
							</span>
                    </li>
                    <li className={`${styles.bgTransparent}  list-group-item`}>
                        <Image
                            width={25}
                            height={25}
                            alt="DownloadsIcon"
                            src={DownloadFolderIcon}
                        ></Image>
                        <span className={`font-weight-normal m-2 ${styles.SmallFont}`}>
                            Downloads
							</span>
                    </li>
                </ul>
            </div>

        );

    } else {
        return null;
    }




}

export default AppExplorerSidePanel;
