import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItemContainer from '../../../../components/collection-item/collection-item.container';

import {
  ColllectionPreviewContainer,
  Title,
  PreviewContainer
} from './collection-preview.style';

const CollectionPreview = props => {
  const { title, items, history, routeName, match } = props;

  return (
    <ColllectionPreviewContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title}
      </Title>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItemContainer key={item.id} item={item} />;
          })}
      </PreviewContainer>
    </ColllectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
