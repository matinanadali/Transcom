import { React } from 'react';
import { Typography  } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Contact.css";
import hi from "../../gifs/hi.json";
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid2';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: hi,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
};


const Contact = () => {
 
    return (
        <Grid container columnSpacing={12} className="Contact">
            <Grid item size={{ xs: 12, md: 12, lg: 7}} className="getInTouchBox">
                <Typography variant="h3" sx={{color: "#424242"}}>Get In Touch</Typography>
                <Typography variant="paragraph" className="infoParagraph">
                    Hi! I am Matina Nadali, the creator of this web-app, and I really appreciate your interest for my project.
                    If you have any questions, suggestions or would like to contribute, feel free to reach out!
                </Typography>
                <Typography variant="h4" sx={{color: "#229799"}}>Contact information</Typography>
                    <div className="contactInfo">
                        <div className="info">
                            <GitHubIcon />
                            <div><a href="https://github.com/matinanadali" rel="noreferrer"  target="_blank" className="infoLink">matinanadali</a></div>
                        </div>
                        <div className="info">
                            <EmailIcon />
                            <div><a href="mailto: matinanad@gmail.com" rel="noreferrer"  target="_blank" className="infoLink">matinanad@gmail.com</a></div>
                        </div>
                        
                    </div>
                <Typography variant="h4" sx={{color: "#229799"}}>Project repository</Typography>
                <div className="projectRepo">
                        <div className="info">
                            <GitHubIcon />
                            <div><a href="https://github.com/matinanadali/Transcom" rel="noreferrer" target="_blank" className="infoLink">matinanadali/transcom</a></div>
                        </div>
                </div>
            </Grid>
            <Grid item className="animationContainer" size={{ xs: 12, md: 12, lg: 5}}>
                <Lottie options={defaultOptions} 
                        height="auto" 
                        width="100%" />
            </Grid>
        </Grid>
    )
}

export default Contact;