import React, { useState } from 'react';
import BatmanEmojiIcon from '../assets/images/BatmanEmojiIcon.png';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import DesktopIconComponent from '../components/DesktopIconComponent';

function DesktopIconContainer(){

    const [desktopIcons, setdesktopIcons] = useState({
        icons: [
            { name: 'This Person', iconName: BatmanEmojiIcon, id: 1 },
            { name: 'Documents', iconName: DocumentsIcon, id: 2 }
        ]
    });

    return(
        <div className={`d-flex align-items-start flex-column bd-highlight mt-1`}>
             {desktopIcons.icons.map((icon) => 
                <DesktopIconComponent
                    name={icon.name}
                    iconName={icon.iconName}
                ></DesktopIconComponent>
            )}
        </div>
    );
}

export default DesktopIconContainer;