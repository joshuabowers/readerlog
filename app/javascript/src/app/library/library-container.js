import { connect } from 'react-redux';
import LibraryComponent from './library-component';

const mapStateToProps = state => (
  {
    books: [...Array(20).keys()].map( i => ({
      id: i,
      title: `Book ${ i }`,
      coverUrl: `https://loremflickr.com/200/300?random=${ i }`
    }))
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
