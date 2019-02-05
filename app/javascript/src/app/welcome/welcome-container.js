import { connect } from 'react-redux';
import WelcomeComponent from './welcome-component';

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const WelcomeContainer = connect(
  mapState, mapDispatch
)( WelcomeComponent );

export default WelcomeContainer;
