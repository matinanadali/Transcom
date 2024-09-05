import { React, useState, useRef } from 'react';
import { Typography, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Contact.css";
import hi from "../../gifs/hi.json";
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: hi,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
};


const Contact = () => {
    const animationRef = useRef(null);
    const [playCount, setPlayCount] = useState(0);
    const maxPlays = 3; // Number of times you want the animation to run
    const handleAnimationComplete = () => {
        // Increment play count when the animation completes
        setPlayCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount < maxPlays) {
            animationRef.current.play(); // Restart animation if maxPlays not reached
          }
          return newCount;
        });
    };
    return (
        <div className="Contact">
            <div className="getInTouchBox">
                <Typography variant="h3" sx={{color: "#424242"}}>Get In Touch</Typography>
                <Typography variant="paragraph">
                    Hi! I am Matina Nadali, the creator of this web-app, and I really appreciate your interest for my project.
                    If you have any questions, suggestions or would like to contribute, feel free to reach out!
                </Typography>
                <Typography variant="h4" sx={{color: "#229799"}}>Contact information</Typography>
                    <div className="contactInfo">
                        <div>
                            <GitHubIcon />
                            <div>matinanadali</div>
                        </div>
                        <div>
                            <EmailIcon />
                            <div>matinanad@gmail.com</div>
                        </div>
                        
                    </div>
                <Typography variant="h4" sx={{color: "#229799"}}>Project repository</Typography>
                <div className="projectRepo">
                        <div>
                            <GitHubIcon />
                            <div>matinanadali/transcom</div>
                        </div>
                </div>
            </div>
            <div className="animationContainer">
                <Lottie options={defaultOptions} 
                        height="auto" 
                        width="100%" />
            </div>
        </div>
    )
}

export default Contact;