import React, { useState, useCallback } from 'react';
import '../styles/DragDropArea.css';
import data from '../../data/data.json';
import { useDropzone } from 'react-dropzone';

const DragDropArea = ( { onFileUpdate, setAlertText }) => {
  const [isDropActive, setIsDropActive] = useState(false);
  const {getRootProps, getInputProps} = useDropzone({noClick :true});
  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropActive(true);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy'; 
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropActive(false);
  }, []);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropActive(false);
    
    if (event.dataTransfer.files.length === 0) {
      setAlertText("Drag-and-drop feature is not supported at the moment. Please use an alternative method to upload your file.");
      return;
    }
    const file = event.dataTransfer.files[0];

    const extension = '.' + file.name.split('.').pop();
    if (data['supported-languages'].map((lang) => lang.fileExtension).indexOf(extension) === -1) {
          onFileUpdate(null);
    } else {
          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = (e) => {
          const content = e.target.result; // Get the file content
          onFileUpdate({name:file.name, extension:extension, content: content});
        }
    };

  }, [onFileUpdate, setAlertText]);

  return (
      <div
      {...getRootProps({className: 'dropzone'})}
      className={isDropActive ? 'DragDropArea drop-active' : 'DragDropArea drop-inactive'}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    ><input {...getInputProps()}  />
      {isDropActive ? 'Drop file anywhere' : ''}
      <span className='border_btm'></span>
    </div>
    
  );
};

export default DragDropArea;
