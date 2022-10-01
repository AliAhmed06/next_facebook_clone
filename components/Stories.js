import Image from "next/image"
import StoryCard from "./StoryCard"

const stories = [
    {
        name: 'ali ahmed',
        src: "/assets/images/ali.jpg",
        profile: "/assets/images/ali.jpg",
    },
    {
        name: 'Raja Jalees',
        src: "/assets/images/jalees.jpg",
        profile: "/assets/images/jalees.jpg",
    },
    {
        name: 'Tayyab Khushi',
        src: "/assets/images/tayyab.jpg",
        profile: "/assets/images/tayyab.jpg",
    },
    {
        name: 'Naeem Abbas',
        src: "/assets/images/naeem.jpg",
        profile: "/assets/images/naeem.jpg",
    },
    {
        name: 'Zeeshan Ahmad',
        src: "/assets/images/zeeshan.jpg",
        profile: "/assets/images/zeeshan.jpg",
    },
    
]


const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">                
        {stories.map((item) => (
            <StoryCard name={item.name} src={item.src} profile={item.profile} />
        ))}
    </div>
  )
}

export default Stories