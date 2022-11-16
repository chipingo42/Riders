import React from 'react'


const Sidebar = () => {
  return (
    <div className='w-[242px] h-[100vh] bg-white flex flex-col mt-[10px] '>
      <div className=' w-full h-[70px] border-b-2 border-[#555B6A29] relative right-0  left-0 '>
        <span className='absolute right-4 top-2'>
          <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9167 18.7552C22.9167 19.3281 22.4522 19.7916 21.8803 19.7916H13.5365C13.2617 19.7916 12.998 19.6824 12.8037 19.4881C12.6093 19.2937 12.5001 19.0301 12.5001 18.7552C12.5001 18.4803 12.6093 18.2167 12.8037 18.0223C12.998 17.8279 13.2617 17.7187 13.5365 17.7187H21.8803C22.1552 17.7187 22.4188 17.8279 22.6132 18.0223C22.8076 18.2167 22.9167 18.4803 22.9167 18.7552Z" fill="#555B6A"/>
            <path d="M22.9167 12.4999C22.9167 13.0728 22.4522 13.5364 21.8803 13.5364L3.11987 13.5364C2.84499 13.5364 2.58136 13.4272 2.38699 13.2328C2.19261 13.0384 2.08341 12.7748 2.08341 12.4999C2.08341 12.225 2.19261 11.9614 2.38699 11.767C2.58136 11.5727 2.84499 11.4635 3.11987 11.4635L21.8803 11.4635C22.1552 11.4635 22.4188 11.5727 22.6132 11.767C22.8076 11.9614 22.9167 12.225 22.9167 12.4999Z" fill="#555B6A"/>
            <path d="M21.8803 7.28125C22.1552 7.28125 22.4188 7.17205 22.6132 6.97768C22.8076 6.78331 22.9167 6.51968 22.9167 6.24479C22.9167 5.9699 22.8076 5.70628 22.6132 5.5119C22.4188 5.31753 22.1552 5.20833 21.8803 5.20833L9.36987 5.20833C9.09499 5.20833 8.83136 5.31753 8.63698 5.5119C8.44261 5.70628 8.33341 5.9699 8.33341 6.24479C8.33341 6.51968 8.44261 6.78331 8.63698 6.97768C8.83136 7.17205 9.09499 7.28125 9.36987 7.28125L21.8803 7.28125Z" fill="#555B6A"/>
          </svg>
        </span>
      </div>
      <div className='flex flex-col space-y-4  max-w-[900px] mx-[20px] mt-[34px]'>
        <div className=' group hover:bg-[#133040] w-full h-[38px] rounded-[2px]'>
          <div className='flex items-center space-x-2 ml-[6px] mt-2'>
            <span className=' group-hover:text-white '>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </span>
            <h1 className='font-Mulish font-[600] text-[16px] leading-[20px] group-hover:text-white '>Dashboard</h1>
          </div>
        </div>
        <div className='group hover:bg-[#133040] w-full h-[38px] rounded-[2px]'>
          <div className='flex items-center space-x-2 ml-[6px] mt-2'>
            <span className='group-hover:text-white '>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <h1 className='font-Mulish font-[600] text-[16px] leading-[20px] group-hover:text-white '>Riders</h1>
          </div>
        </div>
        <div className='group hover:bg-[#133040] w-full h-[38px] rounded-[2px]'>
          <div className='flex items-center space-x-3 ml-[6px] mt-2'>
            <span className='group-hover:text-white '>
              <svg className='stroke-[#555B6A] group-hover:stroke-white' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9333 3H2.06667C1.47756 3 1 3.44772 1 4V20C1 20.5523 1.47756 21 2.06667 21H15.9333C16.5224 21 17 20.5523 17 20V4C17 3.44772 16.5224 3 15.9333 3Z" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M5.80005 1V4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2 1V4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.7334 8.5H13.2667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.7334 12.5H11.1334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.7334 16.5H9.00007" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h1 className='font-Mulish font-[600] text-[16px] leading-[20px] group-hover:text-white '>Orders</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;


