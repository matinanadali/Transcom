import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import data from '../../data/data.json';

// Styled input component, visually hidden
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

const UploadFilesButton = ( { onFileContentUpdate }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (e) => {
        const content = e.target.result; // Get the file content
        onFileContentUpdate(content);
    };
  }
  return (
    <Button
      component="label" // makes the button act like a <label> element
      variant="contained"
      startIcon={<CloudUploadIcon />}
      size="large"
      className="uploadFilesButton"
      
    >
      <Typography variant="h4">Upload files</Typography>
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => handleUpload(event)}
        accept={data['supported-languages'].join(', ')}
        multiple
      />
    </Button>
  );
}

export default UploadFilesButton;
