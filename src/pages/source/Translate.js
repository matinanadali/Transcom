import React, { useContext, useState } from "react";
import { ContentContext } from "../../ContentContext";
import Grid from "@mui/material/Grid2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import '../styles/Translate.css';
import arrows from '../../gifs/arrows.json';
import Lottie from "react-lottie";
import { translateComments } from '../../Translate/source/translateComments';
import SelectLang from '../../Translate/source/SelectLang';
import { Button, Skeleton } from '@mui/material';
import DownloadButton from "../../Translate/source/DownloadButton";
import data from "../../data/data.json";
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../Translate/source/CopyButton";

// Lottie animation default options
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
    const [targetLang, setTargetLang] = useState('FR');
    const [loading, setLoading] = useState(false);

    const onTargetLangChange = (newTargetLang) => {
        setTargetLang(newTargetLang);
    }

    const onTranslateButtonClick = async () => {
        setLoading(true);
        try {
            const fileName = file.name.split('.').shift() + '_' + data['supported-target-languages'].find((lang) => lang.code === targetLang).name;
            const translated = await translateComments(file.content, targetLang, file.extension);
            setTranslatedFile({name: fileName, extension: file.extension, content: translated} || file); 
        } catch (error) {
            console.error('Error fetching translated comments:', error);
            setTranslatedFile(file); // Fallback to original if an error occurs
        }
        setLoading(false);
    };
 
    return (
        <div className="Translate">
        
          <Grid container className="langSelectContainer" rowSpacing={0} columnSpacing={5}>

            <Grid className="langSelect" item size={{ xs: 12, md: 12, lg: 12}}>
              <SelectLang lang={targetLang} setLang={onTargetLangChange} />
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
              <SyntaxHighlighter language="python" style={monokaiSublime} className="codeBox">
                {file.content}
              </SyntaxHighlighter>
            </Grid>
            <Grid size={{ xs: 0, md: 0, lg: 2}}>
              <Lottie options={defaultOptions} height="auto" width="100%" />
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 5}}>
              <div className="fileName">
                <div>
                  {translatedFile.name + translatedFile.extension}
                </div>
                 <CopyButton text={translatedFile.content} />
              </div>
              {
                (loading) ? (
                  <Skeleton  variant="rectangular" sx={{ bgcolor: "#e0e0e0", height: '50vh', width: '100%'}}>
                    <SyntaxHighlighter  style={monokaiSublime} id="translatedCode" className="codeBox">
                      {translatedFile.content}
                    </SyntaxHighlighter>
                  </Skeleton>
                ) : (
                  <SyntaxHighlighter  style={monokaiSublime} id="translatedCode" className="codeBox">
                      {translatedFile.content}
                    </SyntaxHighlighter>
                )
              }
            </Grid>
       
          </Grid>
      </div>
    )
}

export default Translate;