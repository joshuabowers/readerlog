import { connect } from 'react-redux';
import LoggedOutHeaderComponent from './logged-out-header-component';

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {

  }
);

const LoggedOutHeaderContainer = connect(
  mapStateToProps, mapDispatchToProps
)( LoggedOutHeaderComponent );

export default LoggedOutHeaderContainer;
