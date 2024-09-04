import React from 'react';
import Lottie from 'react-lottie';
import welcome from '../../gifs/welcome';
import Popover from './Popover';
import { Typography } from '@mui/material';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcome,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const HomeImage = () => {
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
                    of the most popular programming languages across 36 supported human languages!
                </Typography>
            </div>
        </div>
    );
};

export default HomeImage;
