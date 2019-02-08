import { connect } from 'react-redux';
import BookComponent from './book-component';

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  // onClick: dispatch action to, ultimately, add the .details class.

  // This would hide the book until the image has loaded, dispatch
  // a visible action, which would update a state variable to show
  // the book with an animation. 

  // handleImageLoad: e =>
});

const BookContainer = connect(
  mapState, mapDispatch
)( BookComponent );

export default BookContainer;
