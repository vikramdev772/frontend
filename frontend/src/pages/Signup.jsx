import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
      <form className="form-control mx-[20px] bg-white shadow-xl w-[400px] flex justify-center flex-col gap-[10px] p-[25px] rounded-[8px]" action>
       <p className="title  text-3xl font-bold  text-blue-300">Sign Up</p>
          <div className="input-field relative w-full">
            <input
              required
              className="input"
              type="text"
              placeholder=""
            />
            <label className="label" htmlFor="input">Enter name</label>
          </div>
          <div className="input-field relative w-full">
            <input
              required
              className="input"
              type="email"
              placeholder=""
            />
            <label className="label" htmlFor="input">Enter email</label>
          </div>
          <div className="input-field relative w-full">
            <input
              required
              className="input"
              type="password"
              placeholder=""
            />
            <label className="label" htmlFor="input">Enter Password</label>
          </div>
          <button className="submit-btn">Sign Up</button>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              className="text-xs text-gray-500 uppercase dark:text-blue-400 hover:underline"
              to="/login"
            >
              Already have an account? Log in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
