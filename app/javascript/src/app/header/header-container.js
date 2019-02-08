import { connect } from 'react-redux';
import HeaderComponent from './header-component';

const mapStateToProps = state => (
  {
    isLoggedIn: state.app.isLoggedIn
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
