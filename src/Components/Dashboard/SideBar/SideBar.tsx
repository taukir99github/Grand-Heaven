import React from 'react'

interface SideBarProps {
    item: {
      id: number;
      path: string;
      image: string;
      text: string;
    };
  }

  const SideBar: React.FC<SideBarProps> = ({ item }) => {
    
  return (
    <div className='w-[300px] m-1 flex gap-5 h-auto p-2 bg-slate-400'>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <span className='font-normal text-[16px]'>{item.text}</span>
      </div>
    </div>
  )
}

export default SideBar
