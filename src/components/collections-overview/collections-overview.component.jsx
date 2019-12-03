import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../modules/shop/components/collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collections-overview.style';

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
