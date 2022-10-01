import Image from "next/image"

const SidebarRow = ({icon, title, src}) => {
  return (
    <div className="flex items-center gap-4 p-2 mt-2 hover:bg-gray-200 rounded-xl cursor-pointer">
        {src ? (
            <Image 
                src={src} 
                height={40} 
                width={40}  
                className={'rounded-full'}
            />        
        ) : (
            <i className={`${icon} h-6 w-6 text-center mt-2 text-blue-700`} ></i>
        )}
        <p className="text-sm font-semibold hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow