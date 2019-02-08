import { connect } from 'react-redux';
import SearchBarComponent from './search-bar-component';
import { actions } from 'reducers/app';

const mapState = state => ({
  query: state.app.search.query,
  isVisible: state.app.search.isVisible
});

const mapDispatch = dispatch => ({
  handleSearch: (e) => dispatch( actions.search( e.target.value ) )
});

const SearchBarContainer = connect(
  mapState, mapDispatch
)( SearchBarComponent );

export default SearchBarContainer;
