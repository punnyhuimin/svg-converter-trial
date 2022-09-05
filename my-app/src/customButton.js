import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
// import SvgClockSvgrepoCom from './ClockIcon';

function CustomButton({colorInput}) {
    const [colorCurrent, setColor] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    function handleColor() {
        if(buttonClicked === false) {
            setColor(colorInput);
            setButtonClicked(true);
        } else {
            setColor("black");
            setButtonClicked(false);
        }
    }

    // useEffect(() => console.log(buttonClicked), [buttonClicked])

    return (
        buttonClicked ?
            <Button sx={{color: colorCurrent}} disableRipple variant="contained" onClick={() => handleColor()}>
            Clicked
        </Button> : 
        <Button sx={{color: colorCurrent, border: 10, borderColor: 'red'}} disableRipple variant="contained" onClick={() => handleColor()}>
            Not clicked
        </Button> 
    );
}

export default CustomButton;
