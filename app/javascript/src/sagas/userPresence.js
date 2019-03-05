import { take, put, call, fork } from 'redux-saga/effects';
import API from 'utils/restAPI';
import { actions } from 'reducers/app/log-in';

export function * authorize( formData ) {
  try {
    const response = yield call( API.add, '/api/authenticate', formData );

    if( response.status >= 200 && response.status < 300 ){
      const user = yield response.json();
      yield put( actions.logInSuccess( name ) );
    } else {
      throw yield response.json();
    }
  } catch( error ){
    yield put( actions.logInFailure( error ) );
  }
}

export default function * userPresence() {
  while( true ){
    const { payload: logInFormData } = yield take( actions.logIn );
    yield fork( authorize, logInFormData );
    yield take( [ actions.logInFailure, actions.logOut ] );
    yield call( API.destroy, '/api/log_out' );
  }
}
