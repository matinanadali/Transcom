import { React, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IconButton } from "@mui/material";
import copy from 'copy-to-clipboard';
import Message from "../../Translate/source/Message";


const CopyButton = ( {text} ) => {
    const [messageOpen, setMessageOpen] = useState(false);
    const onSetOpen = (value) => {
        setMessageOpen(value);
    };

    const handleClick = () => {
        copy(text);
        setMessageOpen(true);
    };
    
    return (
        <div>
            <IconButton className="CopyButton" color="background" onClick={handleClick}>
                <IoCopyOutline size="25px"></IoCopyOutline> 
            </IconButton>
            <Message text="Text copied to clipboard!" open={messageOpen} setOpen={onSetOpen} />
        </div>
    )
}

export default CopyButton;