import React from 'react'
import circle_chart from '../../Assets/Circle-Chart.png'

const Analytics = () => {
  return (
    <div className='flex mt-[29px] space-x-7'>
      <div className='flex-1  border border-[#E6EDFF] h-[344px] px-[10px] rounded-md '>
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
                <option className=' font-Poppins font-[400] text-[14px] text-[#000000] '>Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='border broder-[#E6EDFF] w-[256px] h-[344px] rounded-md '>
        <div className='flex flex-col px-[10px]'>
          <div className='flex items-center justify-between pt-[20px]'>
            <h1 className=' font-Mulish font-[700] text-[20px] text-[#000000] '>Earnings</h1>
            <span>
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
              </svg>
            </span>
          </div>
          <div className='mt-4 flex justify-center'>
            <img src={circle_chart} alt="/" />
          </div>
          <div className='flex space-x-3 justify-center pt-[20px]'>
            <div className='flex items-center'>
              <span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.5" cy="4.5" r="4" fill="#347AE2"/>
                </svg>
              </span>
              <span className=' font-Mulish font-[600] ont-[14px] text-[#000000] '>Offline</span>
            </div>
            <div className='flex items-center'>
              <span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.5" cy="4.5" r="4" fill="#347AE2"/>
                </svg>
              </span>
              <span className=' font-Mulish font-[600] ont-[14px] text-[#000000] '>Offline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics;