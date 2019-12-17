import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  SubTitle
} from './menu-item.style';
const MenuItem = props => {
  const { title, imageUrl, size, history, linkUrl, match } = props;
  const directUrl = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <MenuItemContainer size={size} onClick={directUrl}>
      <BackgroundImage image={imageUrl} />
      <ContentContainer>
        <Title>{title}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
