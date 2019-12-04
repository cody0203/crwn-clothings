import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    // Observer pattern
    // this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToArray(snapshot);
    //   dispatch(updateCollections(collectionsMap));
    //   this.setState({ loading: false });
    // });
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(Shop);
