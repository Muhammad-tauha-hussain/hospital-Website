import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [state, setState] = useState('sign up');

  const onSubmitHandler = (data) => {
    // Process form data
    console.log(data);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='min-h-[80vh] w-96 p-6 border border-gray-400 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold text-center'>
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </h1>
        <p className='text-center mb-6'>
          {state === 'sign up' ? 'Please sign up to book an appointment' : 'Please log in to book an appointment'}
        </p>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          {/* Full Name (only for sign up) */}
          {state === 'sign up' && (
            <div className='mb-4'>
              <label className='block text-gray-700'>Full Name</label>
              <input
                {...register('name', { required: true })}
                className='w-full p-2 border border-gray-300 rounded-lg'
              />
              {errors.name && <p className='text-red-500'>Name is required</p>}
            </div>
          )}

          {/* Email */}
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className='w-full p-2 border border-gray-300 rounded-lg'
            />
            {errors.email && <p className='text-red-500'>Email is required</p>}
          </div>

          {/* Password */}
          <div className='mb-6'>
            <label className='block text-gray-700'>Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className='w-full p-2 border border-gray-300 rounded-lg'
            />
            {errors.password && <p className='text-red-500'>Password is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full bg-blue-500 text-white py-2 rounded-lg'>
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </button>
        </form>

        {/* Switch between Sign Up and Login */}
        <p className='text-center mt-4'>
          {state === 'sign up' ? (
            <>
              Already have an account?{' '}
              <span className='text-blue-500 cursor-pointer' onClick={() => setState('login')}>
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span className='text-blue-500 cursor-pointer' onClick={() => setState('sign up')}>
                Sign up here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default Login;
