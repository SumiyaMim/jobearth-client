/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoMail } from 'react-icons/io5';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCheck } from 'react-icons/fa';
import { FaRegImages } from 'react-icons/fa6';
import { TbEye } from 'react-icons/tb';
import { TbEyeClosed } from 'react-icons/tb';
import Lottie from 'lottie-react';
import login from '../assets/login.json';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
  const { googleSignIn, createUser, handleUpdateProfile, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // google sign up
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // create user
  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        handleUpdateProfile(name, photo)
          .then((result) => {
            signOutUser();
            navigate('/signin');
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="py-20 px-12">
      <div className="lg:flex justify-between items-center">
        <div className="p-6 md:p-10 w-full md:w-3/4 lg:w-2/5 mx-auto rounded-md">
          <h2 className="text-2xl font-semibold text-center mb-14">Create Account</h2>
          <form onSubmit={handleCreateUser}>
            <div className="form-control">
              <div className="mb-6 flex items-center border-[1.5px] rounded-md pl-3.5">
                <FaUserCheck className="text-gray-500 text-lg" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input flex-grow focus:outline-none pl-3 rounded-md placeholder-text-sm text-sm"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <div className="mb-6 flex items-center border-[1.5px] rounded-md pl-3.5">
                <IoMail className="text-gray-500 text-lg" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input flex-grow focus:outline-none pl-3 rounded-md placeholder-text-sm text-sm"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <div className="mb-6 flex items-center border-[1.5px] rounded-md pl-3.5">
                <FaRegImages className="text-gray-500 text-lg" />
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input flex-grow focus:outline-none pl-3 rounded-md placeholder-text-sm text-sm"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <div className="mb-1 flex items-center border-[1.5px] rounded-md pl-3.5">
                <RiLockPasswordFill className="text-gray-500 text-lg" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input flex-grow focus:outline-none pl-3 rounded-md placeholder-text-sm text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="flex items-center pr-3.5"
                >
                  <i className='text-gray-500 text-lg'>
                    {passwordVisible ? <TbEye /> : <TbEyeClosed />}
                  </i>                
                  </button>
              </div>
            </div>
            <p className="mt-2 text-xs text-red-600 font-medium">{error}</p>
            <div className="form-control my-6">
              <button
                type="submit"
                className="bg-cyan-600 p-3 w-full rounded-md text-white font-medium text-base"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="divider text-sm font-semibold">or</div>
          <div className="form-control my-6">
            <button
              onClick={handleGoogleSignUp}
              className="shadow bg-white p-3 w-full rounded-md font-semibold text-sm flex justify-center items-center gap-4"
            >
              <FcGoogle className="text-lg" />
              <p className="text-zinc-700 text-base font-medium">Sign up with Google</p>
            </button>
          </div>
          <p className="text-[#706F6F] text-center text-sm font-semibold">
            Already have an account?{" "}
            <Link to="/signin" className="text-cyan-600">
              Sign in
            </Link>
          </p>
        </div>
        <div className="w-[480px] mx-auto hidden lg:block">
          <Lottie animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SignUp
