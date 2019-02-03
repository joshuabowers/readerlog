import { connect } from 'react-redux';
import HeaderComponent from './header-component';

const mapStateToProps = state => (
  {
    isLoggedIn: state.isLoggedIn
  }
);

const mapDispatchToProps = dispatch => (
  {

  }
);

const HeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( HeaderComponent );

export default HeaderContainer;
