import React from "react";
import '../styles/ActionBox.css';
import { styled } from '@mui/material/styles';
import { Button, IconButton } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const ActionBox = () => {


    const iconSize = '40px';
    return (
    <div className="ActionBox">
        <div className="UploadFilesBox">
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                size = 'large'
                className="uploadFilesButton"
                >
                <Typography variant="h4">Upload files</Typography>
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
            </Button>
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