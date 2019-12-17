import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const Shop = ({ fetchCollectionsStart, match }) => {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   Observer pattern
  //   this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToArray(snapshot);
  //     dispatch(updateCollections(collectionsMap));
  //     this.setState({ loading: false });
  //   });
  //   fetchCollectionsStart();
  // }

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
