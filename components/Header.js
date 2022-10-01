import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import { useRouter } from "next/router";

const Header = ({imageUrl, name}) => {
    console.log(typeof(imageUrl));
    
    const router = useRouter();

    const signout = () => {
        sessionStorage.removeItem('LoggedInUser');
        router.push('/login');
    }
    
    return (
    <div className="flex items-center justify-between sticky top-0 bg-white p-3 px-6 shadow-md">
        {/* Header Left */}
        <div className="flex items-center">
            <Image src="/assets/images/facebook-logo.png" height={40} width={40} layout="fixed" />

            <div className="flex items-center p-2 bg-gray-100 ml-2 rounded-full gap-2 hidden md:inline-flex">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                <input 
                    type="text" 
                    placeholder="Search Facebook" 
                    className="bg-transparent outline-none placeholder-gray-500"
                />
            </div>
        </div>
        
        {/* Header Center */}
        <div className="flex items-center gap-8 sm:gap-16 ">
            <HeaderIcon icon={'fa-sharp fa-solid fa-house'} active />
            <HeaderIcon icon={'fa-regular fa-flag'} />
            <HeaderIcon icon={'fa-regular fa-circle-play'} />
            <HeaderIcon icon={'fa-regular fa-cart-shopping'} />
            <HeaderIcon icon={'fa-solid fa-people-group'} />            
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-2">
            {/* Profile Pic */}            
            <img src={imageUrl.toString()} height="50" width="50" onClick={signout} className="cursor-pointer rounded-full sm:ml-5 md:ml-0"  />

            <p>{name}</p>
            <i className="fa-sharp fa-solid fa-grip my-global-icon"></i>            
            <i className="fa-regular fa-comment my-global-icon"></i>            
            <i className="fa-solid fa-bell my-global-icon"></i>
            <i className="fa-solid fa-caret-down my-global-icon"></i>
        </div>
    </div>

  )
}

export default Header