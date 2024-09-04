import { Snackbar, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Message = ( {text, open, setOpen} ) => {
    const handleClose = (event, reason) => {    
        setOpen(false);
    };
    
    const action = (
        <React.Fragment>
          <IconButton
            size="medium"
            aria-label="close"
            color="primary"
            onClick={handleClose}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </React.Fragment>
    );
    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            message={text}
            autoHideDuration={6000}
            action={action}
        />
    )
}

export default Message;