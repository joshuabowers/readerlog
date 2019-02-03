import { connect } from 'react-redux';
import LoggedInHeaderComponent from './logged-in-header-component';
import { actions } from 'reducers';

const mapStateToProps = state => (
  {
    username: 'Bob Bobbington'
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleLogOut: () => {
      dispatch( actions.logOut() );
    }
  }
);

const LoggedInHeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( LoggedInHeaderComponent );

export default LoggedInHeaderContainer;
