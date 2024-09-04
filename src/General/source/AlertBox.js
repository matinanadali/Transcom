import React from "react";
import { Alert, AlertTitle, Grow } from '@mui/material';

const AlertBox = ( { display, text }) => {
    return (
        <Grow  in={display}>
            <Alert severity="error">
            <AlertTitle >Error</AlertTitle>
            {text}</Alert>
        </Grow>
        
    )
}

export default AlertBox;