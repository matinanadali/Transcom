import React from "react";
import { Button } from '@mui/material';

const DownloadButton = ({ file, targetLang }) => {
    const downloadFile = () => {
        const translatedFile = new Blob([file.content], {type: 'text/plain'});
        const element = document.createElement("a");
        element.href = URL.createObjectURL(translatedFile);
        element.download = file.name + Date.now() + file.extension;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    return (
        // Prevent download of undefined file
        <Button disabled={file.name === ""} variant="contained" onClick={downloadFile}>Download!</Button>
    )
}

export default DownloadButton;