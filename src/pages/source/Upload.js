import React from "react";
import ResponsiveAppBar from "../../General/source/ResponsiveAppBar";
import ActionBox from "../../General/source/ActionBox";
import '../styles/Upload.css';

const Upload = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div className="ActionBoxContainer">
                <ActionBox />
            </div>
        </div>
    )
}

export default Upload;