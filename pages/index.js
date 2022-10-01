import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';


const Home = () => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    let loggedInUser = sessionStorage.getItem('LoggedInUser');
    if(!loggedInUser){
      router.push('/login')
    }
    if(loggedInUser){
      setLoggedInUser(JSON.parse(loggedInUser))
    }    
  }, [])
  
  
  return (
    <div className='flex flex-col h-screen w-screen'>
        <Head>
            <title>Facebook</title>
        </Head>

        <Header name={`${loggedInUser.displayName}`} imageUrl={`${loggedInUser.photoURL}`} />

        <main className='flex flex-1 p-2'>
            {/* Sidebar */}
            <Sidebar user={loggedInUser} />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            {/* <Widgets /> */}
        </main>
    </div>
  )
}

export default Home