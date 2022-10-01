import { app } from '../firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const router = useRouter();
    
    useEffect(() => {
        let loggedInUser = sessionStorage.getItem('LoggedInUser');
        if(loggedInUser){
          router.push('/')
        }        
    }, [])

    const loginWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
        .then((response) => {
            sessionStorage.setItem('LoggedInUser', JSON.stringify(response.user))            
            router.push('/')
        })
    }

    return (
        <div className='flex w-screen h-screen bg-blue-200 items-center justify-center'>
            <button 
                className='bg-blue-800 text-white p-4 px-8'
                onClick={loginWithGoogle}
            >Login With Google</button>
        </div>
    )
}

export default Login