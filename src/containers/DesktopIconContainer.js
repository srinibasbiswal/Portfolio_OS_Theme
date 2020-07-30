import React, { useState } from 'react';
import BatmanEmojiIcon from '../assets/images/BatmanEmojiIcon.png';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import DesktopIconComponent from '../components/DesktopIconComponent';
import AppModal from '../components/AppModal';
import { Button } from 'react-bootstrap';

function DesktopIconContainer(){

    const [desktopIcons, setdesktopIcons] = useState({
        icons: [
            { 
                name: 'This Person', 
                iconName: BatmanEmojiIcon, 
                id: 1,
                modalId: 'thisPersonModal',
                modalShow : false
            },
            { 
                name: 'Documents', 
                iconName: DocumentsIcon, 
                id: 2,
                modalId: 'documentsModal',
                modalShow : false
            }
        ]
    });

    const setModalShowValue = (index, value) => {
        var iconsMeta = desktopIcons.icons;
        iconsMeta[index].modalShow = value;
        setdesktopIcons({icons : iconsMeta});
    }



    return(
        <div className={`d-flex align-items-start flex-column bd-highlight mt-1`}>
            {console.log(desktopIcons + "1")}
             {desktopIcons.icons.map((icon, key) =>{
                 return(
                    <React.Fragment>
                        <DesktopIconComponent
                            onClickEvent={() => setModalShowValue(key,true)}
                            name={icon.name}
                            iconName={icon.iconName}
                            {... console.log(icon.name)}
                        />

                        <AppModal
                            data={icon.name}
                            {... console.log(icon.modalShow)}
                            show={icon.modalShow}
                            onHide={() => setModalShowValue(key,false)}
                        />
                    </React.Fragment>
                 )}
            )}
        </div>
    );
}

export default DesktopIconContainer;