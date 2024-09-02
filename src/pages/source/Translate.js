import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../ContentContext";
import Grid from "@mui/material/Grid2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import '../styles/Translate.css';
import arrows from '../../gifs/arrows.json';
import Lottie from "react-lottie";
import { translateComments } from '../../Translate/source/translateComments';
import SelectLang from '../../Translate/source/SelectLang';
import { Button } from '@mui/material';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrows,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Translate = () => {
    const { fileContent } = useContext(ContentContext);
    const [translatedContent, setTranslatedContent] = useState('');
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('en');

    const onSourceLangChange = (newSourceLang) => {
        setSourceLang(newSourceLang);
    }
    const onTargetLangChange = (newTargetLang) => {
        setTargetLang(newTargetLang);
    }

    const onTranslateButtonClick = async () => {
        try {
            const translated = await translateComments(fileContent, targetLang);
            setTranslatedContent(translated || fileContent); // Fallback to original if translation fails
        } catch (error) {
            console.error('Error fetching translated comments:', error);
            setTranslatedContent(fileContent); // Fallback to original if an error occurs
        }
    };
 
    return (
        <div className="Translate">
        
        <Grid container className="langSelectContainer" spacing={5}>
        <Grid className="sourceLangSelect langSelect" item size={{ xs: 12, md: 12, lg: 5}}>
        <SelectLang lang={sourceLang} label="Source Language" setLang={onSourceLangChange} />
        </Grid>
        <Grid className="langSelect" item size={{ xs: 12, md: 12, lg: 5}}>
        <SelectLang lang={targetLang} label="Target Language" setLang={onTargetLangChange} />
        </Grid>
        <Grid className="translateButton" item size={{ xs: 12, md: 12, lg:12}}>
        <Button variant="contained" onClick={onTranslateButtonClick}>Translate!</Button>
        
        
        </Grid>
        
        </Grid>
        
        <Grid container className="codeBoxContainer" columnSpacing={2} size='12'>
            
        <Grid size={{ xs: 12, md: 12, lg: 5}}>
        
          <SyntaxHighlighter className="codeBox">
            {fileContent}
          </SyntaxHighlighter>
        </Grid>
        <Grid size={{ xs: 0, md: 0, lg: 2}}>
        <Lottie options={defaultOptions} height="auto" width="100%" />
        </Grid>
        
        <Grid size={{ xs: 12, md: 12, lg: 5}}>
        <SyntaxHighlighter  className="codeBox">
            {translatedContent}
          </SyntaxHighlighter>
        </Grid>
       
      </Grid>
      </div>
    )
}

export default Translate;