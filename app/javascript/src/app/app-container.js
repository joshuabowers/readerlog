import { connect } from 'react-redux';
import AppComponent from './app-component';

const mapState = state => ({
  isLoggedIn: state.app.logIn.userPresent
});

const mapDispatch = dispatch => ({

});

const AppContainer = connect(
  mapState, mapDispatch
)( AppComponent );

export default AppContainer;
