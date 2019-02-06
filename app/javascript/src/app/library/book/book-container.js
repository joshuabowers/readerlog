import { connect } from 'react-redux';
import BookComponent from './book-component';

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const BookContainer = connect(
  mapState, mapDispatch
)( BookComponent );

export default BookContainer;
