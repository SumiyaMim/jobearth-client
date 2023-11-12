/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoMail } from 'react-icons/io5';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbEye } from 'react-icons/tb';
import { TbEyeClosed } from 'react-icons/tb';
import Lottie from 'lottie-react';
import login from '../assets/login.json';
import { AuthContext } from '../providers/AuthProvider';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // google sign up
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // navigate after sign in
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // sign in user
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      signInUser(email, password)
        .then((result) => {
          // navigate after login
          navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
          setError('Invalid email or password');
        });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='py-20 px-12'>
      <div className='lg:flex justify-between items-center'>
        <div className='p-6 md:p-10 w-full md:w-3/4 lg:w-2/5 mx-auto rounded-md'>
          <h2 className='text-2xl font-semibold text-center mb-14'>Welcome back!</h2>
          <form onSubmit={handleSignIn}>
            <div className='form-control mb-6'>
              <div className='flex items-center border-[1.5px] rounded-md pl-3.5'>
                <IoMail className='text-gray-500 text-lg' />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='input flex-grow focus:outline-none pl-3 rounded-md placeholder:text-sm text-sm'
                  required
                />
              </div>
            </div>
            <div className='form-control mb-1'>
              <div className='flex items-center border-[1.5px] rounded-md pl-3.5'>
                <RiLockPasswordFill className='text-gray-500 text-lg' />
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name='password'
                  placeholder='Password'
                  className='input flex-grow focus:outline-none pl-3 rounded-md placeholder:text-sm text-sm'
                  required
                />
                <button
                  type='button'
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className='flex items-center pr-3.5'
                >
                  <i className='text-gray-500 text-lg'>
                    {passwordVisible ? <TbEye /> : <TbEyeClosed />}
                  </i>
                </button>
              </div>
            </div>
            <p className='mt-2 text-sm text-red-600 font-medium'>{error}</p>
            <div className='form-control my-6'>
              <button
                type='submit'
                className='bg-cyan-600 p-3 w-full rounded-md text-white font-medium text-base'
              >
                SIGN IN
              </button>
            </div>
          </form>
          <div className='divider text-sm font-semibold'>or</div>
          <div className='form-control my-6'>
            <button
              onClick={handleGoogleSignIn}
              className='shadow bg-white p-3 w-full rounded-md font-semibold text-sm flex justify-center items-center gap-4'
            >
              <FcGoogle className='text-lg' />
              <p className='text-zinc-700 text-base font-medium'>Sign in with Google</p>
            </button>
          </div>
          <p className='text-[#706F6F] text-center text-sm font-semibold'>
            Don’t have an account?{' '}
            <Link to='/signup' className='text-cyan-600'>
              Sign up
            </Link>
          </p>
        </div>
        <div className='w-[480px] mx-auto hidden lg:block'>
          <Lottie animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
