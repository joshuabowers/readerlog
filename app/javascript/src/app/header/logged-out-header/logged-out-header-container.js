import { connect } from 'react-redux';
import LoggedOutHeaderComponent from './logged-out-header-component';
import { actions } from 'reducers/app';

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {
    handleLogIn: () => {
      dispatch( actions.toggleLogIn() );
    }
  }
);

const LoggedOutHeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( LoggedOutHeaderComponent );

export default LoggedOutHeaderContainer;
