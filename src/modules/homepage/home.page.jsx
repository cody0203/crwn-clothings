import React from 'react';
import classes from './home.module.scss';
import Directory from './components/directory/directory.component';

const HomePage = props => {
  return (
    <div className={classes['homepage']}>
      <Directory />
    </div>
  );
};

export default HomePage;
