import React from 'react';
import classes from './Buttons.module.css';

function Buttons(){
    return(
        <div className={classes.buttongroup}>
           <button variant="outlined" className={classes.button}>DETAILS</button>
           <button variant="outlined" className={classes.button}>STRUCTURE & POINT SYSTEM</button>
           <button variant="outlined" className={classes.button}>ENTRY FEE & PRIZE</button>
           <button variant="outlined" className={classes.button}>ORGANIZER DETAILS</button>
             
        </div>
    )
}


export default Buttons;