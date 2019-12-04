import { shopTypes } from './shop.types';

export const updateCollections = collections => {
  return {
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collections
  };
};
