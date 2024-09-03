import axios from "axios";
import data from '../../data/data.json';

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

const extractComments = (code, regex) => {
    console.log("Start extracting comments");

    // Use a Set to avoid duplicate comments if necessary
    const comments = [];
    let match;

    // Make sure the regex has the global flag to find all matches
    while ((match = regex.exec(code)) !== null) {
        comments.push(match[0]);
        // Move the regex lastIndex to the end of the current match
        // This is important to avoid infinite loops with the global flag
        if (regex.lastIndex === match.index) {
            regex.lastIndex++;
        }
    }

    console.log("Extracted comments");
    return comments;
};


const replaceComments = (code, commentTranslations, regex) => {
    let i = 0;
    // Ensure the regex object has the global flag for replacement
    const globalRegex = new RegExp(regex.source, 'g');
    console.log("replaced comments");
    return code.replace(globalRegex, (match) => commentTranslations[i++] || match);
};

export const translateComments = async (code, targetLang, fileExtension) => {
    // Find the regex string from the data
    const regexString = data['supported-languages'].find((lang) => lang.fileExtension === fileExtension).commentRegex;

    // Ensure the regex string is valid
    let regex;
    try {
        // Check if the regex string has leading and trailing slashes (common in literal regexes)
        if (regexString.startsWith('/') && regexString.endsWith('/')) {
            // Extract pattern and flags
            const regexPattern = regexString.slice(1, -1); // Remove leading and trailing slashes
            const regexFlags = regexString.match(/\/([gimsuy]*)$/)[1]; // Extract flags
            regex = new RegExp(regexPattern, regexFlags);
        } else {
            // If no slashes, assume regexString is a valid pattern with no flags
            regex = new RegExp(regexString, 'g');
        }
    } catch (error) {
        console.error('Error creating RegExp:', error);
        return null;
    }

    try {
        const comments = extractComments(code, regex);

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
        const translatedCode = replaceComments(code, commentTranslations, regex);

        return translatedCode;
    } catch (error) {
        console.error('Error translating comments:', error);
        return null;
    }
};
