import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-preview.style.scss';
import CollectionItem from '../../../../components/collection-item/collection-item.component';

const CollectionPreview = props => {
  const { title, items, history, routeName, match } = props;

  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
