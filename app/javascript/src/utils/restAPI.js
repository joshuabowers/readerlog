const getRequest = ( resource, ...params ) => {
  const url = new URL( resource, window.origin );
  url.search = new URLSearchParams( params );
  return fetch( url, {
    method: 'GET',
    credentials: 'include'
  } );
}

export default {
  // Sign up is the only method which doesn't include credentials on requests.
  signUp: (email, password) => (
    fetch( '/api/sign_up', {
      method: 'POST',
      body: JSON.stringify( { email, password } )
    } )
  ),

  browse: getRequest,
  read: getRequest,

  edit: (resource, ...params ) => (
    fetch( resource, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify( params )
    } )
  ),

  add: ( resource, params ) => (
    fetch( resource, {
      method: 'POST',
      credentials: 'include',
      body: params instanceof FormData ? params : JSON.stringify( params )
    } )
  ),

  destroy: ( resource ) => (
    fetch( resource, {
      method: 'DELETE',
      credentials: 'include'
    } )
  )
};
