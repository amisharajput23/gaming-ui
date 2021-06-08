import React from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './Details.module.css';
import NativeSelect from '@material-ui/core/NativeSelect';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Buttons from './Buttons';



function Details(){
    const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="container">
                <Buttons />
                <form  noValidate autoComplete="off">
                <div className={classes.content}>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 140}} >Select Game</label>
                    <NativeSelect
                        id="select-game"
                        className={classes.select}
                        variant="outlined"
                        >
                        <option value="Call of Duty">Call of Duty</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 50}} >Name of the Tournament</label>
                    <TextField
                        id="select-game"
                    
                        placeholder="Placeholder"
                        className={classes.text}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 170}} >Platform</label>
                    <NativeSelect
                        id="select-game"
                        className={classes.select}
                        variant="outlined"
                        >
                        <option value="Mobile">Mobile</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 135}} >Type of Game</label>
                    <NativeSelect
                        id="select-game"
                        className={classes.select}
                        variant="outlined"
                        >
                        <option value="Solo">Solo</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 160}} >Team Size</label>
                    <TextField
                        id="select-game"
                    
                        placeholder="4"
                        className={classes.text}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 90}} >Max teams allowed</label>
                    <TextField
                        id="select-game"
                        placeholder="20"
                        className={classes.text}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div className={classes.content1}>
                    <label htmlFor="select-game" style={{marginRight: 115}} >Start Date/Time</label>
                    <TextField
                        id="select-game"
                        placeholder="23-10-2021/10:00 PM(IST)"
                        className={classes.text}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                </div>
            </form>
                </div> 
                
                
        </ThemeProvider>
     
    )
}

export default Details;
