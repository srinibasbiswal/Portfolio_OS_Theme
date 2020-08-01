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

    const setModalShowValue = (index, value) => {
        var iconsMeta = desktopIcons.icons;
        iconsMeta[index].modalShow = value;
        setdesktopIcons({ icons: iconsMeta });
    }

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

    return (
        <div className={`d-flex align-items-start flex-column bd-highlight mt-1`}>
            {desktopIcons.icons.map((icon, index) => {
                return (
                    <React.Fragment key={index}>
                        <DesktopIconComponent
                            onClickEvent={() => setModalShowValue(index, true)}
                            name={icon.name}
                            iconName={icon.iconName}
                        />

                        <AppModal
                            data={icon.name}
                            show={icon.modalShow}
                            onHide={() => setModalShowValue(index, false)}
                            modaldetails={AppModalDetails[icon.modalId]}
                        />
                    </React.Fragment>
                )
            }
            )}
        </div>
    );
}

export default DesktopIconContainer;
