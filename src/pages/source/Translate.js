import React, { useContext } from "react";
import { ContentContext } from "../../ContentContext";

const Translate = () => {
    const { fileContent, setFileContent } = useContext(ContentContext);

    console.log(fileContent);
    return (
        <div className="Translate">
    
        </div>
    )
}

export default Translate;