import React from 'react'; 
import styles from '../stylesheets/style.module.css'; 
import Clock from 'react-live-clock';
 
function ClockComponent() { 
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return ( 
        <div className={styles.ClockComponent}> 
            <span className={styles.ClockInnerComponents}> 
                <Clock
                    format={'h:mm A'}
                    timezone={timeZone} 
                /> 
            </span> 
            <span className={styles.ClockInnerComponents}> 
                <Clock
                    format={'DD-MM-YYYY'}
                    timezone={timeZone} 
                /> 
            </span> 
        </div> 
    ); 
} 
 
export default ClockComponent; 