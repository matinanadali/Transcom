import React from 'react';
import Lottie from 'react-lottie';
import welcome from '../../gifs/welcome';
import Popover from './Popover';
import '../styles/HomeImage.css';
import { Typography } from '@mui/material';

const HomeImage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: welcome,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="HomeImage">
            <div>
             <Lottie options={defaultOptions} height="auto" width="100%" />
            </div>
            <div>
                <Typography variant="h3">
                    Translate comments in your source code,
                </Typography>
                <Typography variant="h4">
                    in 
                    <Popover />
                    programming language across 36 supported human languages!
                </Typography>
            </div>
        </div>
    );
};

export default HomeImage;
