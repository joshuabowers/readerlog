import React from 'react';
import MaterialButton from 'app/material-button';
import styles from './styles';

const LogInComponent = ({ isVisible, handleSubmit, ...props }) => (
  <form className={[
    styles.logIn,
    isVisible ? undefined : styles.hidden
  ].join(' ') } onSubmit={ handleSubmit }>
    <label htmlFor='login-email'>Email</label>
    <input type='email' name='email' id='login-email' />
    <label htmlFor='login-password'>Password</label>
    <input type='password' name='password' id='login-password' />
    <div className={ styles.actions }>
      <MaterialButton icon='open_in_browser'
                      label='Submit credentials'
                      type='submit'/>
    </div>
  </form>
);

export default LogInComponent;
