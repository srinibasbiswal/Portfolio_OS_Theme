import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskBarContainer from './TaskBarContainer';

function BG_Container(){
    return(
        <div className = {classes.BG_Container}>
            <TaskBarContainer></TaskBarContainer>
        </div>
    );
}

export default BG_Container;