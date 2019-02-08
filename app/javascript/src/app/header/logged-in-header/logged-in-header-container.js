import { connect } from 'react-redux';
import LoggedInHeaderComponent from './logged-in-header-component';
import { actions } from 'reducers/app';

const mapStateToProps = state => (
  {
    username: 'Bob Bobbington'
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggleSearchBar: () => {
      dispatch( actions.toggleSearchBar() );
    },

    handleLogOut: () => {
      dispatch( actions.logOut() );
    }
  }
);

const LoggedInHeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( LoggedInHeaderComponent );

export default LoggedInHeaderContainer;
