import { connect } from 'react-redux';
import LoggedInHeaderComponent from './logged-in-header-component';

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {

  }
);

const LoggedInHeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( LoggedInHeaderComponent );

export default LoggedInHeaderContainer;
