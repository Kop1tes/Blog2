import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { checkIsAuth, registerUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status)
    } 
    if (isAuth) {
      navigate('/')
    }
  }, [status, isAuth, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ username, password }));
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className='text-large text-white text-center'>Регистрация</h1>
      <label className='text-xs text-gray-400'>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
        />
      </label>

      <label className='text-xs text-gray-400'>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
        />
      </label>

      <div className='flex gap-8 justify-center mt-4'>
        <button
          type='submit'
          className='flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4'
        >
          Подтвердить
        </button>
        <Link to='/login' className='flex justify-center items-center text-xs text-white'>
          Уже зарегистрирован ?
        </Link>
      </div>
    </form>
  );
};
