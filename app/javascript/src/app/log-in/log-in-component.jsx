import React from 'react';
import MaterialButton from 'app/material-button';
import Notification from 'app/notification';
import styles from './styles';

const LogInComponent = ({ isVisible, handleSubmit, error, ...props }) => (
  <>
    <form className={[
      styles.logIn,
      isVisible ? undefined : styles.hidden
    ].join(' ') } onSubmit={ handleSubmit }>
      <label htmlFor='login-email'>Email</label>
      <input type='email' name='email' id='login-email' />
      <label htmlFor='login-password'>Password</label>
      <input type='password' name='password' id='login-password' />
      <menu className={ styles.actions }>
        <MaterialButton icon='open_in_browser'
                        label='Submit credentials'
                        type='submit'/>
      </menu>
    </form>
    { error && <Notification type='error' message={ error } /> }
  </>
);

export default LogInComponent;
