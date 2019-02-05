import { connect } from 'react-redux';
import AppComponent from './app-component';

const mapState = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatch = dispatch => ({

});

const AppContainer = connect(
  mapState, mapDispatch
)( AppComponent );

export default AppContainer;
