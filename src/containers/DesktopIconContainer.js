import React, { useState } from 'react';
import BatmanEmojiIcon from '../assets/images/BatmanEmojiIcon.png';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import DesktopIconComponent from '../components/DesktopIconComponent';
import AppModal from '../components/AppModal';

function DesktopIconContainer() {

    const [desktopIcons, setdesktopIcons] = useState({
        icons: [
            {
                name: 'This Person',
                iconName: BatmanEmojiIcon,
                id: 1,
                modalId: 'thisPersonModal',
                modalShow: false
            },
            {
                name: 'Documents',
                iconName: DocumentsIcon,
                id: 2,
                modalId: 'documentsModal',
                modalShow: false
            }
        ]
    });

    const AppModalDetails = {
        'thisPersonModal': {
            topPanel: true,
            sidePanel: true
        },

        'documentsModal': {
            topPanel: true,
            sidePanel: true
        }
    };

    const [zIndexCounter, setzIndexCounter] = useState(1000);

    const [ModalzIndexValues, setModalzIndexValues] = useState({
        'thisPersonModal': 1000,
        'documentsModal': 1000
    });

    const setModalShowValue = (index, modalId, value) => {
        var iconsMeta = desktopIcons.icons;
        iconsMeta[index].modalShow = value;
        setdesktopIcons({ icons: iconsMeta });
        setzIndexCounter(zIndexCounter + 1);
        var ModalzIndexValuesMeta = ModalzIndexValues
        ModalzIndexValuesMeta[modalId] = ModalzIndexValues[modalId] + 1;
        setModalzIndexValues(ModalzIndexValuesMeta);
    }

    return (
        <div className={`d-flex align-items-start flex-column bd-highlight mt-1`}>
            {desktopIcons.icons.map((icon, index) => {
                return (
                    <React.Fragment key={index}>
                        <DesktopIconComponent
                            onClickEvent={() => setModalShowValue(index, icon.modalId, true)}
                            name={icon.name}
                            iconName={icon.iconName}
                        />

                        <AppModal
                            data={icon.name}
                            show={icon.modalShow}
                            onHide={() => setModalShowValue(index, false)}
                            modaldetails={AppModalDetails[icon.modalId]}
                            zIndexValue={ModalzIndexValues[icon.modalId]}
                        />
                    </React.Fragment>
                )
            }
            )}
        </div>
    );
}

export default DesktopIconContainer;
