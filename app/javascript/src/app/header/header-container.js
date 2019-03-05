import { connect } from 'react-redux';
import HeaderComponent from './header-component';

const mapStateToProps = state => (
  {
    isLoggedIn: state.app.logIn.userPresent
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
