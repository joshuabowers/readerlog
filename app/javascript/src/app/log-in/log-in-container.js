import { connect } from 'react-redux';
import LogInComponent from './log-in-component';
import { actions } from 'reducers/app/log-in';

const mapState = state => ({
  isVisible: !state.app.logIn.userPresent && state.app.logIn.isVisible,
  error: state.app.logIn.error
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
