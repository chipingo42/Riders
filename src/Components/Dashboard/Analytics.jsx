import React from 'react'

const Analytics = () => {
  return (
    <div className='mt-[29px] border border-[#E6EDFF] h-[344px] px-[10px] '>
      <div>
        <div className='flex pt-[20px]'>
          <h1 className='flex-1 font-Mulish font-[600] text-[20px] text-[#000000] '>Orders Analytics</h1>
          <div className='flex space-x-3'>
            <div className='flex items-center space-x-1'>
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#347AE2"/>
                </svg>
              </span>
              <p className=' font-Mulish font-[600] text-[14px] text-[#000000] '>Offline orders</p>
            </div>
            <div className='flex items-center space-x-1'>
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#FF9500"/>
                </svg>
              </span>
              <p className=' font-Mulish font-[600] text-[14px] text-[#000000] '>Offline orders</p>
            </div>
            <div>
              <select className=' shadow-lg rounded-md'>
                <option className=' font-Poppins font-[400] text-[14px] '>Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics;