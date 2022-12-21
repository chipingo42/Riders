import React from 'react'
import avater from '../Assets/avater8.png'

const Admin = () => {
  return (
    <div className='flex justify-between items-center mt-2'>
      <div>
        <form className='flex items-center relative top-0 left-0 '>
          <label htmlFor="search">
            <span className='absolute left-2 top-3 '>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.55295 17.1059C10.4506 17.1055 12.2936 16.4702 13.7884 15.3012L18.4883 20.0011L20 18.4893L15.3002 13.7895C16.4698 12.2945 17.1054 10.4511 17.1059 8.55295C17.1059 3.83707 13.2688 0 8.55295 0C3.83707 0 0 3.83707 0 8.55295C0 13.2688 3.83707 17.1059 8.55295 17.1059ZM8.55295 2.13824C12.0907 2.13824 14.9677 5.01523 14.9677 8.55295C14.9677 12.0907 12.0907 14.9677 8.55295 14.9677C5.01523 14.9677 2.13824 12.0907 2.13824 8.55295C2.13824 5.01523 5.01523 2.13824 8.55295 2.13824Z" fill="#BEC1C9"/>
              </svg>
            </span>
          </label>
          <input id='search' type="text" placeholder='Search' className=' w-[30vw] pl-10 py-2 outline-none ' />
        </form>
      </div>
      <div className=' bg-white w-[180px] h-[40px] '>
        <div className='flex space-x-3 items-center px-1'>
          <div className=' w-[36px] h-[36px] border-2 border-solid border-[#FF6600] rounded-full mt-1 '>
            <img src={avater} alt="/" />
          </div>
          <div className='flex items-center space-x-2'>
            <p className=' font-Mulish font-[600] text-[18px] text-[#000000] '>Add Admin</p>
            <span>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.14 14.8V9.16H0.65V5.62H6.14V0.129999H9.86V5.62H15.35V9.16H9.86V14.8H6.14Z" fill="#FF6600"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin