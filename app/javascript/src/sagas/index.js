import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects'
import { actions } from 'reducers/library';
import randomSentence from 'random-sentence';
import userPresence from './userPresence';

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* createBookPlaceholders() {
  const placeholders = Array(40).keys();
  for( let i of placeholders ){
    const action = actions.addBook( {
      id: i,
      title: randomSentence({ min: 1, max: 5}).slice( 0, -1 ),
      coverUrl: `https://loremflickr.com/200/300?random=${ i }`
    }  );
    yield put( action  );
  }
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    createBookPlaceholders(),
    userPresence()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
