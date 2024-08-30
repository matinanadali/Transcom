import React from 'react';
import WelcomeBanner from '../../Home/source/HomeBanner';
import ResponsiveAppBar from '../../General/source/ResponsiveAppBar';

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <WelcomeBanner />
    </div>
  );
}

export default Home;
