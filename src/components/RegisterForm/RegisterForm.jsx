import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';
import { useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(() => {
        console.log('registration error');
      });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Name
        <input type="text" name="name" className={css.input} />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.input} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.input} />
      </label>
      <button type="submit" className={css.button}>Register</button>
    </form>
  );
};

export default RegisterForm;