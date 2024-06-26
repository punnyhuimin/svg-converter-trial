import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import SvgClockIcon from './icons/ClockIcon';
import SvgApple from './icons/Apple';
// import { Button } from '@mui/material';
// import ButtonContainer from './buttonContainer';
import { useTheme } from '@mui/material/styles';
// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from 'downloadjs';

var htmlToImage = require('html-to-image');

function App() {
  const theme = useTheme();

  function exportAsImage() {
    const requiredEle = document.getElementById('big-clock') as HTMLElement;
    const clonedEle = requiredEle.cloneNode(true) as HTMLElement;
    // Have to appendChild if not the dataUrl cannot be rendered
    document.body.appendChild(clonedEle);
    clonedEle.style.width = "500px";
    clonedEle.style.height = "500px";
    // htmlToImage.toPng(document.getElementById('big-clock') as HTMLElement)
    htmlToImage.toPng(clonedEle)
    .then(function (dataUrl: string) {
      console.log(dataUrl)
      download(dataUrl, 'my-big-clock.png');
      // Have to removeChild to remove it from the page after the rendered image is downloaded
      document.body.removeChild(clonedEle);
    });
  }
  
  function exportAsSvg() {
    htmlToImage.toSvg(document.getElementById('big-clock') as HTMLElement)
    .then(function (dataUrl: string) {
      download(dataUrl, 'my-big-clock.svg');
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <SvgClockIcon id='small-clock' fontSize = "small" style = {{color: theme.palette.secondary.main}} />
          <SvgClockIcon />
          <SvgApple color="info"/>
          <SvgClockIcon id='big-clock' sx={{fontSize: '70px'}} color ="success"/>
        {/* <ButtonContainer buttons = {["orange", "yellow", "red"]}/> */}
        <button onClick={() => exportAsImage()}>png</button>
        <button onClick={() => exportAsSvg()}>svg</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
