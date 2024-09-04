import React from 'react';
import HomeImage from './HomeImage';
import '../styles/HomeBanner.css'
import ActionBox from '../../General/source/ActionBox';
import Grid from '@mui/material/Grid2';

const HomeBanner = () => {
    return (
        <Grid className="HomeBanner" direction='row' container alignItems="stretch" columnSpacing={12} >
          <Grid size={{ xs: 12, md: 12, lg: 6}}>
            <HomeImage />
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 6}}>
            <div className="ActionBoxContainer">
              <ActionBox />
            </div>
          </Grid>
        </Grid>
    );
}

export default HomeBanner;