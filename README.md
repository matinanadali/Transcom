# TransCom
A web application designed to help developers translate comments in their source code files into different languages. With support for up to 36 target languages, TransCom makes it easy to manage and understand code comments in a variety of languages.

## Main Features
**1. File Upload:** Upload source files via direct upload, drag-and-drop, or paste.

**2. Language Selection:** Choose from 36 available target languages for translation.

**3. Translation:** Automatically translates comments in the code to the selected language using the DeepL API.

**4. Output Options:** Copy translated content to clipboard or download the translated file.

**5. Responsive Design:** The application is designed to adapt to various devices and screen sizes.

## Technologies Used
**1.React.js:** For building the user interface.

**2.DeepL API:** For translating comments.

**3. Material UI:** For designing user interface.

## Installation
To run TransCom locally, follow these steps:

**1. Clone the repository**
```shell
git clone https://github.com/matinanadali/transcom.git
cd transcom
```
**2. Install Dependencies**
```shell
npm install
```

**3. Set up environment variables**

Create your API key <a href="https://www.deepl.com/en/pro-api">here</a>. Then, create a .env file in the root of your project and add your DeepL API key:
```shell
REACT_APP_DEEPL_API_KEY=your-deepl-api-key
```
**4. Start the Development Center**
```shell
npm start
```

## Contibute
Contributions are always welcome! If you have suggestions, bug reports, or would like to add new features, please open an issue or submit a pull request. 

## Needed improvements/ issues to resolve
1. General Performance

     - [ ] Ensure drag-and-drop feature is stable across various browsers
     - [ ] Automatic recognition of the source language of the pasted text.
   
2. User Interface
   
     - [ ] Searchable dropdown for languages.
     - [x] Design <s>how-to-use and</s> contact page

3. Additional features

     - [x] Code samples for the user to test the functionality of the app.
     - [ ] Support for multiple file and directory uploads.
     - [ ] Connect with Github to translate comments in github repositories
     - [ ] Support for more programming languages.
   

