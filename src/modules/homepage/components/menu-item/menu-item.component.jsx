import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = props => {
  const { title, imageUrl, size, history, linkUrl, match } = props;
  const directUrl = () => {
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div className={`menu-item ${size ? size : ''}`} onClick={directUrl}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
