import React from 'react';
import MaterialButton from 'app/material-button';
import styles from './styles';

const LogInComponent = ({ isVisible, ...props }) => (
  <section className={[
    styles.logIn,
    isVisible ? undefined : styles.hidden
  ].join(' ') }>
    <label htmlFor='login-email'>Email</label>
    <input type='email' id='login-email' />
    <label htmlFor='login-password'>Password</label>
    <input type='password' id='login-password' />
    <div className={ styles.actions }>
      <MaterialButton icon='open_in_browser' label='Submit credentials'/>
    </div>
  </section>
);

export default LogInComponent;
