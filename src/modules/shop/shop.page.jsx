import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.page';

const Shop = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default Shop;
