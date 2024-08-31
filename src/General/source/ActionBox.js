import React, { useState } from "react";
import '../styles/ActionBox.css';
import { IconButton, Alert, AlertTitle } from "@mui/material";
import UploadFilesButton from "./UploadFilesButton";
import { Typography, Box } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const iconSize = '40px';

const ActionBox = () => {
    const [fileContent, setFileContent] = useState("");
    const [alert, setAlert] = useState(false);
    const handleFileContentUpdate = (content) => {
        if (content === "") {
            setAlert(true);
        } else {
            setFileContent(content);
        }
    };

    return (
    <div className="ActionBox">
        <div className="UploadFilesBox">
            <UploadFilesButton onFileContentUpdate={handleFileContentUpdate}/>
            <Alert className="alert" variant="outlined" severity="error" sx={{display:(alert ? "block" : "none")}}>
                <AlertTitle sx={{display:"span"}}>Error</AlertTitle>
                    Unsupported file format.
                </Alert>
            <Box
                sx={{
                    display: {
                    xs: 'none', // Hide on extra small screens
                    lg: 'block', // Show on large screens
                    },
                }}
            >
                
                <Typography variant="h5">Or drop a file,</Typography>
                <Typography variant="h6">or paste source code</Typography>
            </Box>
        </div>
        <div className="noCodePrompt">
        <div>
        <Typography variant="h6">No code?</Typography>
        <Typography variant="h6">Select a language and try a sample:</Typography>
        </div>
        <div className="iconBox">
            <IconButton color="primary">
                <FaPython size={iconSize}/>
            </IconButton>
            <IconButton color="primary">
                <SiJavascript size={iconSize}/>
            </IconButton>
            <IconButton color="primary">
                <FaJava size={iconSize}/>
            </IconButton>
        </div>
        </div>
    </div>
    )
}

export default ActionBox;