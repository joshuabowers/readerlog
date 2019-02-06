import { connect } from 'react-redux';
import BookComponent from './book-component';

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  // onClick: dispatch action to, ultimately, add the .details class.
});

const BookContainer = connect(
  mapState, mapDispatch
)( BookComponent );

export default BookContainer;
