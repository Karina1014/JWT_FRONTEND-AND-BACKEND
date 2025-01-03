import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Asegúrate de que esta ruta sea correcta
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [passsword,setPassword] = useState('');


  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img onClick={()=> navigate('/')}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-xl font-bold mb-4">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="mb-6">
          {state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}
        </p>
        <form>
          {/* Campo Nombre solo en Sign Up */}
          {state === 'Sign Up' && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.person_icon} alt="Person Icon" />
              <input onChange={e => setName(e.target.Value)}
                value={name}
                className="bg-transparent outline-none w-full text-white"
                type="text"
                placeholder="Full name"
                required
              />
            </div>
          )}

          {/* Campo Email */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.mail_icon} alt="Mail Icon" />
            <input onChange={e => setEmail(e.target.Value)}
              value={email}
              className="bg-transparent outline-none w-full text-white"
              type="email"
              placeholder="Email ID"
              required
            />
          </div>

          {/* Campo Password */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.lock_icon} alt="Lock Icon" />
            <input onChange={e => setPassword(e.target.Value)}
                value={passsword}
              className="bg-transparent outline-none w-full text-white"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {state === 'Login' && (
            <p onClick={()=> navigate('/reset-password')}
            className="mb-4 text-indigo-500 cursor-pointer">Forgot password?</p>
          )}

          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium"
          >
            {state}
          </button>
        </form>

        {state === 'Sign Up' ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-blue-400 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-blue-400 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
