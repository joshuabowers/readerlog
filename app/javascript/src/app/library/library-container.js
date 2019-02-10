import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import LibraryComponent from './library-component';

const getLibraryBooks = state => state.library.books;
const getOrderByField = state => 'title';

const getSortedBooks = createSelector(
  [getLibraryBooks, getOrderByField],
  (libraryBooks, field) => libraryBooks.sort(
    (a, b) => +(a[field] > b[field]) || +(a[field] === b[field]) - 1
  )
);

const getGroupedBooks = createSelector(
  [getSortedBooks, getOrderByField],
  (sortedBooks, field) => sortedBooks.reduce(
    ( obj, model ) => {
      const key = model[field].charAt(0).toUpperCase();
      const array = obj[key] || [];
      return {
        ...obj,
        [ key ]: [ ...array, model ]
      }
    }, {}
  )
)

const mapStateToProps = state => (
  {
    library: getGroupedBooks( state )
  }
);

const mapDispatchToProps = dispatch => (
  {

  }
);

const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( LibraryComponent );

export default LibraryContainer;
