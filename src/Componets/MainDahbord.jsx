import React from 'react'

const MainDahbord = () => {
  return (
    <div className='mx-[30px]'>
      <div className='flex justify-between'>
        <form className='flex items-center mt-[10px] '>
          <label htmlFor="search">
            <svg className='absolute top-[23px] ml-[22px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.55295 17.1059C10.4506 17.1055 12.2936 16.4702 13.7884 15.3012L18.4883 20.0011L20 18.4893L15.3002 13.7895C16.4698 12.2945 17.1054 10.4511 17.1059 8.55295C17.1059 3.83707 13.2688 0 8.55295 0C3.83707 0 0 3.83707 0 8.55295C0 13.2688 3.83707 17.1059 8.55295 17.1059ZM8.55295 2.13824C12.0907 2.13824 14.9677 5.01523 14.9677 8.55295C14.9677 12.0907 12.0907 14.9677 8.55295 14.9677C5.01523 14.9677 2.13824 12.0907 2.13824 8.55295C2.13824 5.01523 5.01523 2.13824 8.55295 2.13824Z" fill="#BEC1C9"/>
            </svg>
          </label>
          <input id='search' type="text" placeholder='Search' className=' w-[30vw] bg-white  pl-[50px] py-[10px] px-[50px] text-[#BEC1C9] placeholder:font-Mulish placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[20px] '/>
        </form>
        <div className='flex justify-evenly space-x-2 items-center w-[190px] h-[40px] bg-white mt-[10px]'>
          <div className=' w-[36px] h-[36px] border-2 broder-[#FF6600] rounded-full '></div>
          <h2 className=' font-Mulish font-[600] text-[18px] text-[#000000] '>Add Admin</h2>
          <div>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.14 14.8V9.16H0.65V5.62H6.14V0.129999H9.86V5.62H15.35V9.16H9.86V14.8H6.14Z" fill="#FF6600"/>
            </svg>
          </div>
        </div>
      </div>
      <div className=' w-[80vw] h-[90vh] bg-white my-[30px] '>
        <h1>ddjjjjdj</h1>
      </div>
    </div>
  )
}

export default MainDahbord;