import React from 'react'

const Budget:React.FC = () => {
  return (
    <div className='w-64 h-60 flex justify-between px-6 cursor-pointer'>
      <div className='flex flex-col gap-3 font-normal'>
      <span className='font-medium'>Minimum</span>
      <p>5 Lac</p>
      <p>10 Lac</p>
      <p>15 Lac</p>
      <p>20 Lac</p>
      <p>30 Lac</p>
      </div>
      <div>-</div>
      <div className='flex flex-col gap-3 font-normal'>
      <span className='font-medium'>Maximum</span>
      <p>5 Lac</p>
      <p>10 Lac</p>
      <p>15 Lac</p>
      <p>20 Lac</p>
      <p>30 Lac</p>
      </div>
      </div>
    
  )
}

export default Budget
