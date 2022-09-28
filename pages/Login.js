import React, { useEffect, useState } from 'react'
import { app } from '../firebase'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'
import { async } from '@firebase/util'

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    let token = sessionStorage.getItem('Token');
    if(token){
      router.push('/home')
    }
  }, [])
  
  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      sessionStorage.setItem('Token', response.user.accessToken)
      router.push('/home')
    })
    .catch((err)=>{
      alert(err.message);
    })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((response) => {
      sessionStorage.setItem('Token', response.user.accessToken)
      router.push('/home')
    })
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-400 gap-3'>
      <h1 className='font-bold text-2xl'>Login</h1>

      <input 
        type="text" 
        placeholder='Enter Email'  
        className='w-screen max-w-[400px] p-2 px-8 outline-none text-lg'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        type="password" 
        placeholder='Enter Password'  
        className='w-screen max-w-[400px] p-2 px-8 outline-none text-lg'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button 
        className='bg-black text-white w-screen max-w-[400px] p-2' 
        onClick={signIn}
      >Login</button>

      <button 
        className='bg-blue-900 text-white w-screen max-w-[400px] p-2' 
        onClick={signInWithGoogle}
      >Login With Google</button>

      <h2>Don't Have an acount? <a href="/Register">Register</a></h2>
    </div>
  )
}

export default Login