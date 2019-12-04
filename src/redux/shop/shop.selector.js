import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  // Get value of properties in object
  collections => (collections ? Object.values(collections) : [])
  // Option 2:
  // collections => Object.keys(collections).map(key => collections[key])
);

// Selector selectCollection nhận vào 1 tham số là url parameter của page để mapping đến id của collection
export const selectCollection = collectionUrlParam =>
  // Sau đó selector trả về createSelector như bình thường
  createSelector([selectCollections], collections =>
    // Tìm đến collection có key === với url parameter của page
    collections ? collections[collectionUrlParam] : null
  );

// Selector for check if collections is empty object,
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],

  // Because initial state of collections is null
  // So we can use !! to converted null to false because null is a falsy value
  // Then use it for loading value of Loading HOC
  shop => !!shop.collections
);
