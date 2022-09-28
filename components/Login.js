import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setisLoggingIn] = useState(true);
  
  const { login, signup } = useAuth();
  
  async function submitHandler(){
    if(!email || !password){
      setError('All fields are required');
      return
    }

    if(isLoggingIn){
      try {
        await login(email, password);
      } catch (err) {
        setError('Incorrect Email or Password')
      }
      return
    }
    await signup(email, password);
  }

  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-4'>
      <h1 className='font-extrabold text-3xl select-none'>
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {error && <div className='text-red-400'>{error}</div>} 
      <input 
        type="text" 
        placeholder='Enter Email' 
        className='duration-300 border-b-2 border-solid border-white focus:border-cyan-300 outline-none text-slate-900 p-2 w-full max-w-[600px]' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
      />
      <input 
        type="password" 
        placeholder='Enter Password' 
        className='duration-300 border-b-2 border-solid border-white focus:border-cyan-300 outline-none text-slate-900 p-2 w-full max-w-[600px]' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
      />
      <button 
        className='w-full max-w-[600px] border border-white border-solid uppercase py-2 duration-300 relative hover:opacity-60'
        onClick={submitHandler}
      >
        Submit
      </button>

      <h2 
        className='duration-300 hover:scale-110 cursor-pointer'
        onClick={() => setisLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  )
}

export default Login