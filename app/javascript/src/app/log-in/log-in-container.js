import { connect } from 'react-redux';
import LogInComponent from './log-in-component';
import { actions } from 'reducers/app';

const mapState = state => ({
  isVisible: !state.app.isLoggedIn && state.app.logIn.isVisible
});

const mapDispatch = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const formData = new FormData( e.target );
    return dispatch( actions.logIn( formData ) );
  }
});

const LogInContainer = connect(
  mapState, mapDispatch
)( LogInComponent );

export default LogInContainer;
