import React, { useState } from 'react';
import DesktopIcon from '../components/DesktopIcon';

function DesktopIconContainer() {

    const [desktopIcons, setDesktopIcons] = useState({
        icons: [
            { name: 'This Person', iconName: 'ThisPersonIcon', id: 1 },
            { name: 'Documents', iconName: 'DocumentsFolderIcon', id: 1 }
        ]
    });

    return (
        <div>
            {desktopIcons.icons.map((icon) =>
                <DesktopIcon iconName={icon.iconName} name={icon.name} key={icon.id}></DesktopIcon>
            )}
        </div>
    );

}

export default DesktopIconContainer;
