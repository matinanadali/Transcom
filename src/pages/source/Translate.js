import React, { useContext, useState } from "react";
import { ContentContext } from "../../ContentContext";
import Grid from "@mui/material/Grid2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import '../styles/Translate.css';
import arrows from '../../gifs/arrows.json';
import Lottie from "react-lottie";
import { translateComments } from '../../Translate/source/translateComments';
import SelectLang from '../../Translate/source/SelectLang';
import { Button } from '@mui/material';
import DownloadButton from "../../Translate/source/DownloadButton";
import data from "../../data/data.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrows,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Translate = () => {
    const { file } = useContext(ContentContext);
    const [translatedFile, setTranslatedFile] = useState({name:"", content:"", extension:""});
    const [targetLang, setTargetLang] = useState('EN');

    const onTargetLangChange = (newTargetLang) => {
        setTargetLang(newTargetLang);
    }

    const onTranslateButtonClick = async () => {
        try {
            const fileName = file.name.split('.').shift() + '_' + data['supported-target-languages'].find((lang) => lang.code === targetLang).name;
            const translated = await translateComments(file.content, targetLang, file.extension);
            setTranslatedFile({name: fileName, extension: file.extension, content: translated} || file); 
            } catch (error) {
            console.error('Error fetching translated comments:', error);
            setTranslatedFile(file); // Fallback to original if an error occurs
        }
    };
 
    return (
        <div className="Translate">
        
        <Grid container className="langSelectContainer" rowSpacing={0} columnSpacing={5}>

        <Grid className="langSelect" item size={{ xs: 12, md: 12, lg: 12}}>
        <SelectLang lang={targetLang} label="Target Language" setLang={onTargetLangChange} />
        </Grid>
        <Grid className="translateButton button" item size={{ xs: 12, md: 12, lg:6}}>
        <Button variant="contained" onClick={onTranslateButtonClick}>Translate!</Button>
        
        
        </Grid>
        <Grid className="downloadButton button" item size={{ xs: 12, md: 12, lg:6}}>
        <DownloadButton file={translatedFile} targetLang={targetLang} />
        
        
        </Grid>
        
        </Grid>
        
        <Grid container className="codeBoxContainer" columnSpacing={2} size='12'>
            
        <Grid size={{ xs: 12, md: 12, lg: 5}}>
          <div className="fileName">{file.name}</div>
          <SyntaxHighlighter className="codeBox">
            {file.content}
          </SyntaxHighlighter>
        </Grid>
        <Grid size={{ xs: 0, md: 0, lg: 2}}>
        <Lottie options={defaultOptions} height="auto" width="100%" />
        </Grid>
        
        <Grid size={{ xs: 12, md: 12, lg: 5}}>
        <div className="fileName">{translatedFile.name}</div>
        <SyntaxHighlighter  className="codeBox">
            {translatedFile.content}
          </SyntaxHighlighter>
        </Grid>
       
      </Grid>
      </div>
    )
}

export default Translate;