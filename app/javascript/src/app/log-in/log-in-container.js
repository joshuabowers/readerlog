import { connect } from 'react-redux';
import LogInComponent from './log-in-component';

const mapState = state => ({
  isVisible: !state.app.isLoggedIn && state.app.logIn.isVisible
});

const mapDispatch = dispatch => ({

});

const LogInContainer = connect(
  mapState, mapDispatch
)( LogInComponent );

export default LogInContainer;
