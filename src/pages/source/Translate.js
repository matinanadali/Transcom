import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../ContentContext";
import Grid from "@mui/material/Grid2";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import '../styles/Translate.css';
import arrows from '../../gifs/arrows.json';
import Lottie from "react-lottie";
import axios from 'axios';

const targetLang = 'fr';
const DEEPL_API_KEY = '6cd902fc-71d9-45cf-9dc6-7a87ca5b4cae:fx'; // Replace with your actual DeepL API key
const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate'; // Adjust to 'https://api.deepl.com/v2/translate' if using the paid plan

const translateText = async (text, targetLang) => {
    try {
        const response = await axios.post(
            DEEPL_API_URL,
            new URLSearchParams({
                auth_key: DEEPL_API_KEY,
                text,
                target_lang: targetLang
            }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.translations[0].text;
    } catch (error) {
        if (error.response) {
            console.error('Error translating text:', error.response.data);
        } else {
            console.error('Error translating text:', error.message);
        }
        return null;
    }
};

const extractComments = (code) => {
    // Regular expressions for extracting comments from JavaScript
    const comments = [];
    
    // Match single-line comments (//) and multi-line comments (/* */)
    const regex = /\/\/.*|\/\*[\s\S]*?\*\//g;
    let match;

    while ((match = regex.exec(code)) !== null) {
        comments.push(match[0]);
    }

    return comments;
};

const replaceComments = (code, commentTranslations) => {
    let i = 0;
    return code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, (match) => commentTranslations[i++] || match);
};

const translateComments = async (code, targetLang) => {
    try {
        const comments = extractComments(code);

        // Translate each comment
        const translations = await Promise.all(
            comments.map(comment => translateText(comment, targetLang))
        );

        // Map the original comments to their translations
        const commentTranslations = translations.map((translation, index) => {
            if (translation) {
                return translation;
            } else {
                console.error(`Failed to translate comment: ${comments[index]}`);
                return comments[index];
            }
        });

        // Replace original comments with translated comments in the code
        const translatedCode = replaceComments(code, commentTranslations);

        return translatedCode;
    } catch (error) {
        console.error('Error translating comments:', error);
        return null;
    }
};

const Translate = () => {
    const { fileContent } = useContext(ContentContext);
    const [translatedContent, setTranslatedContent] = useState('');

    useEffect(() => {
        const fetchTranslatedComments = async () => {
            try {
                const translated = await translateComments(fileContent, targetLang);
                setTranslatedContent(translated || fileContent); // Fallback to original if translation fails
            } catch (error) {
                console.error('Error fetching translated comments:', error);
                setTranslatedContent(fileContent); // Fallback to original if an error occurs
            }
        };

        fetchTranslatedComments();
    }, [fileContent, targetLang]); // Re-run effect if fileContent or targetLang changes
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: arrows,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
 
    return (
        <Grid className="Translate" direction='row' container columnSpacing={2} >
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
    )
}

export default Translate;