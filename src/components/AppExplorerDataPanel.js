import React, { useState } from 'react';
import styles from '../stylesheets/style.module.css';
import DesktopIconComponent from './DesktopIconComponent';
import AppModal from './AppModal';

function AppExplorerDataPanel(props) {

    const [componentModalDetails, setComponentModalDetails] = useState({
        componentDataList: props.modaldetails.data
    });
    
    const changeComponentModalDetails = (component , index) => {
        var componentDataListMeta = componentModalDetails.componentDataList;
        componentDataListMeta[index] = component;
        setComponentModalDetails( {componentDataList:componentDataListMeta});
    }

    const handleClose = ( index) => {
        var component = componentModalDetails.componentDataList[index];
        component.modalShow = false;
        changeComponentModalDetails(component, index);
    }
    const handleShow = (index) => {
        var component = componentModalDetails.componentDataList[index];
        component.modalShow = true;
        changeComponentModalDetails(component, index);
    }

    if (props.modaldetails.modalType === 'explorer'){   
        {console.log('dataComponent')}
        return (        
            <div className={`${styles.AppExplorerDataPanel}`}>
                {
                    componentModalDetails.componentDataList.map((dataComponent, index) => {
                        {console.log(dataComponent)}
                        return(
                            <React.Fragment>
                                <DesktopIconComponent
                                    captioncolor = 'fontColorBlack'                                
                                    name={dataComponent.name}
                                    iconName={dataComponent.iconName}
                                    onClickEvent={() => handleShow(index)}
                                />

                                <AppModal
                                    name={dataComponent.name}
                                    iconname={dataComponent.iconName}
                                    show={dataComponent.modalShow}                            
                                    onHide={() => handleClose(index)}
                                    modaldetails={dataComponent}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        );
    }else if (props.modaldetails.modalType === 'componentData'){
        return(
            <h1>componentData</h1>
        )
    }else{
        return(
        <h2>hello 2</h2>
        )
    }
}

export default AppExplorerDataPanel;
