import React from 'react';
import classes from './index.module.scss';
import Directory from './components/directory/index';

const HomePage = props => {
  return (
    <div className={classes['homepage']}>
      <Directory />
    </div>
  );
};

export default HomePage;
