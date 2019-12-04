import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.page';
import WithSpinner from '../../components/hocs/with-spinner/with-spinner.component';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
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
    const { match, isCollectionLoaded } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionPreviewWithSpinner
                isLoading={!isCollectionLoaded}
                {...props}
              />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner
                isLoading={!isCollectionLoaded}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
