import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import CustomButton from './customButton';
// import SvgClockSvgrepoCom from './ClockIcon';

function ButtonContainer({buttons}) {

    function buttonList(buttons) {
        const buttonArr = []
        buttons.forEach((colorInput) => {
            buttonArr.push(
                <CustomButton colorInput={colorInput}>
                    Hello
                </CustomButton>)
        }
        )
        return buttonArr
    }

    return (
        <div> {buttonList(buttons)} </div>
    );
}

export default ButtonContainer;
