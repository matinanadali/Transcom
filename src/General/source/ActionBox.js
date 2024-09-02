import React, { useContext } from "react";
import '../styles/ActionBox.css';
import { IconButton } from "@mui/material";
import UploadFilesButton from "./UploadFilesButton";
import { Typography, Box } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../ContentContext";

const iconSize = '40px';

const ActionBox = () => {
    const { file, setFile } = useContext(ContentContext);

    const navigate = useNavigate();
    const handleFileUpdate = (file) => {
        setFile(file);
        navigate('/translate');
    };

    return (
    <div className="ActionBox">
        <div className="UploadFilesBox">
            <UploadFilesButton onFileUpdate={handleFileUpdate}/>
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