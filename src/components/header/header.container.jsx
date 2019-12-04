import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './header.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
