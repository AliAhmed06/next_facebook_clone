import Image from "next/image"
import SidebarRow from "./SidebarRow"

const Sidebar = ({user}) => {
  return (
    <div className="bg-gray-100 cursor-pointer max-w-[600px] lg:min-w-[300px]" >        
        <SidebarRow  src={user.photoURL} title={user.displayName}/>
        <SidebarRow  icon="fa-solid fa-user-group" title="Friends"/>
        <SidebarRow  icon="fa-sharp fa-solid fa-people-group" title="Groups"/>
        <SidebarRow  icon="fa-solid fa-lock" title="MarketPlace"/>
        <SidebarRow  icon="fa-solid fa-tv" title="Watch"/>
        <SidebarRow  icon="fa-sharp fa-solid fa-calendar-days" title="Events"/>
        <SidebarRow  icon="fa-solid fa-clock" title="Memories"/>
        <SidebarRow  icon="fa-solid fa-angle-down" title="See More"/>
    </div>
  )
}

export default Sidebar