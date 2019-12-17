import React from 'react';

import DirectoryContainer from '../../components/directory/directory.container';
import HomePageContainer from './home.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryContainer />
    </HomePageContainer>
  );
};

export default HomePage;
