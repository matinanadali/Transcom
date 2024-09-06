import React, { useContext, useState } from "react";
import '../styles/ActionBox.css';
import { IconButton } from "@mui/material";
import UploadFilesButton from "./UploadFilesButton";
import { Typography, Box, Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FileContext } from "../../FileContext";
import AlertBox from "./AlertBox";
import DragDropArea from "./DragDropArea";
import PasteArea from "./PasteArea";
import axios from 'axios';

const iconSize = '40px';

const ActionBox = () => {
    const { setFile } = useContext(FileContext);
    const [ alertText, setAlertText ] = useState("");   // error-displaying alert
    const [ openPasteArea, setOpenPasteArea ] = useState(false);

    const navigate = useNavigate();
    const handleFileUpdate = (file) => {
        if (file === null) {
            setAlertText("Unsupported file format. Please check the supported languages.");
        } else {
            setAlertText("");   // close alert
            setFile(file);
            navigate('/translate');
        }
    };

    const handleSampleButtonClick = (language) => {
        let filePath, name, extension;
        if (language === "python") {
            filePath = "/codeSamples/pythonSample.py";
            name = "pythonSample.py";
            extension = ".py";
        } else if (language === "js") {
            filePath = "/codeSamples/jsSample.js";
            name = "jsSample.js";
            extension = ".js";
        } else {
            filePath = "/codeSamples/javaSample.java";
            name = "javaSample.java";
            extension = ".java";
        }

        axios.get(filePath)
        .then(response => {
        handleFileUpdate({name: name, extension: extension, content: response.data});  // Set the file content
        })
        .catch(error => console.error('Error fetching the file:', error));
    }

    const handlePasteCodeClick = () => {
        setOpenPasteArea(true);
    }

    return (
        <div className="ActionBox">
            <AlertBox display = {alertText !== ""} text={alertText}/>
            <div className="UploadFilesBox">
                <DragDropArea onFileUpdate={handleFileUpdate} setAlertText={setAlertText}/>
                <UploadFilesButton onFileUpdate={handleFileUpdate}/>
                <PasteArea onFileUpdate={handleFileUpdate} openPasteArea={openPasteArea} setOpenPasteArea={setOpenPasteArea}/>
                <Box
                    sx={{
                        display: {
                        xs: 'none', // Hide on extra small screens
                        lg: 'block', // Show on large screens
                        },
                    }}
                >
                    
                    <Typography variant="h5">Or drop a file,</Typography>
                    <Button onClick={handlePasteCodeClick} sx={{'text-transform':'none', 'padding':'0', 'margin':'0'}}> <Typography variant="h6">or paste source code</Typography></Button>
                </Box>
            </div>
            <div className="noCodePrompt">
                <div>
                    <Typography variant="h6">No code?</Typography>
                    <Typography variant="h6">Select a language and try a sample:</Typography>
                </div>
                <div className="iconBox">
                    <IconButton color="primary" onClick={() => handleSampleButtonClick("python")}>
                        <FaPython size={iconSize}/>
                    </IconButton>
                    <IconButton color="primary">
                        <SiJavascript size={iconSize} onClick={() => handleSampleButtonClick("js")} />
                    </IconButton>
                    <IconButton color="primary">
                        <FaJava size={iconSize} onClick={() => handleSampleButtonClick("java")}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ActionBox;