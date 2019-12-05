import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    // Observer pattern
    // this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToArray(snapshot);
    //   dispatch(updateCollections(collectionsMap));
    //   this.setState({ loading: false });
    // });
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
