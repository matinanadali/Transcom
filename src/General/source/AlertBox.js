import React from "react";
import { Alert, AlertTitle, Grow } from '@mui/material';

const AlertBox = ( { display }) => {
    return (
        <Grow  in={display}>
            <Alert severity="error">
            <AlertTitle >Error</AlertTitle>
            Unsupported file format. Please check <a href="/">supported languages.</a></Alert>
        </Grow>
        
    )
}

export default AlertBox;