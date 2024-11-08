import React from 'react'
import Header2 from '../livechat/components/Header2'
import Sidebar from '../components/SideBar'
import SideBar2 from '../livechat/components/SideBar2'
import Body2 from '../livechat/components/Body2'
import Body3 from './components/Body3'


const NewChat = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header2 />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-1/12"/> {/* Left sidebar with a fixed width */}
        <div className="flex-1 overflow-y-scroll p-4"> {/* Main body container */}
          <Body3 />
        </div>
        <SideBar2 className="w-1/12"/> {/* Right sidebar with a fixed width */}
      </div>
    </div>
  )
}

export default NewChat