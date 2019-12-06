import React, { useContext } from 'react';
import CollectionPreview from '../../modules/shop/components/collection-preview/collection-preview.component';

import './collections-overview.style.scss';

import ShopContext from '../../context/shop/shop.context';

const CollectionsOverview = () => {
  const collections = useContext(ShopContext);

  const collectionsOverView = Object.values(collections);

  console.log(collections);
  return (
    <div className="collections-overview">
      {collectionsOverView.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
