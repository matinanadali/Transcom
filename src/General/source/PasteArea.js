import React, { useState } from "react";
import { Dialog, Button, Typography, Select, MenuItem } from '@mui/material';
import '../styles/PasteArea.css';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import '../styles/PasteArea.css';
import data from '../../data/data.json';
import AlertBox from "./AlertBox";

const PasteArea = ( { onFileUpdate, openPasteArea, setOpenPasteArea }) => {
    const [ language, setLanguage ] = useState("C++");
    const [ text, setText ] = useState("");
    const [ alert, setAlert ] = useState(false);  // error-displaying alert

    // Close paste area
    const handleClose = () => {
        setOpenPasteArea(false);
    }

    const handleLangChange = (event) => {
      setLanguage(event.target.value);
    }

    const handleCancel = () => {
        handleClose();
    }

    const handleTextChange = (event) => {
      setText(event.target.value);
    }

    const handleOk = (event) => {
      event.preventDefault();
      if (text === "") {
        setAlert(true);
      } else {
        setAlert(false);
        const extension = data['supported-languages'].find((lang) => lang.name === language).fileExtension;
        const name = "main" + extension;
        onFileUpdate({name: name, extension: extension, content: text});
        handleClose();
      }
    }
    return (
        <Dialog className="PasteArea" 
                sx={{'min-width' : '80vw'}}
                fullWidth
                maxWidth="lg"
                open={openPasteArea}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                      event.preventDefault();
                      handleClose();
                    },
                  }}
                  >
          <AlertBox display={alert}  text="You forgot to paste your code :)"/>
          <DialogContent className="dialogContent">
            <div className="direction">
              <Typography variant="h4" >1. Paste your code</Typography>
            </div>
            <textarea
              className="pasteTextArea"
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              onChange={handleTextChange}
            />

            <div className="selectLangDirection direction">
              <Typography variant="h4">2. Select source language: </Typography>
              <div className="selectContainer">
                <Select id="sourceLangSelect" value={language} onChange={handleLangChange}>
                  {data['supported-languages'].map((lang) => 
                    <MenuItem value={lang.name}>{lang.name}</MenuItem> 
                  )}
                </Select>
              </div>
            </div>
          </DialogContent>
          
          <DialogActions>
            <Button variant="contained" className="cancelButton" onClick={handleCancel} sx={{'backgroundColor': 'rgba(66, 66, 66, 0.2)', 'color': '#424242'}}>Cancel</Button>
            <Button variant="contained" type="submit" onClick={handleOk}>Ok</Button>
          </DialogActions>
        </Dialog>
    )
}

export default PasteArea;