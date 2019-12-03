import React from 'react';

import Directory from './components/directory/directory.component';
import HomePageContainer from './home.styles';

const HomePage = props => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
