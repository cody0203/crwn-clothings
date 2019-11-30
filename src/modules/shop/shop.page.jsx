import React, {Component} from 'react';
import {SHOP_DATA} from './shop.data';
import CollectionPreview from './components/collection-preview/collection-preview.component';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div>
        {collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}

export default Shop;
