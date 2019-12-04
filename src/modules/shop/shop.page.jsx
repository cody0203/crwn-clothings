import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.page';
import WithSpinner from '../../components/hocs/with-spinner/with-spinner.component';

import {
  firestore,
  convertCollectionsSnapshotToArray
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { dispatch } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToArray(snapshot);
      dispatch(updateCollections(collectionsMap));
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionPreviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default connect()(Shop);
