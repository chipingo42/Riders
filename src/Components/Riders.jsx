import React from 'react'
import Admin from './Admin'
import avater from '../Assets/avatar.png'

const Riders = () => {
  return (
    <div className='flex flex-col w-full mx-[20px]'>
      <Admin/>
      <div className='bg-white w-full h-full my-[30px] relative top-2 rounded-md px-[20px] py-4 '>
        <div className='border border-[#E6EDFF] min-h-[500px] rounded-md px-[20px] py-3 '>
          <div className='flex justify-between mt-[20px]'>
            <h1 className=' font-Poppins font-[500] text-[20px] text-[#000000] '>Riders List</h1>
            <select className=' shadow-xl rounded-md outline-none'>
              <option className=' font-Poppins font-[400] text-[12px] text-[#000000] '>Monthly</option>
            </select>
          </div>
          <table className=' w-full'>
            <thead>
              <tr>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>No</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] '>Customer Name</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] '>Phone Number</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] w-[15%] '>Location</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] w-[80px] '>Amount Earned</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] '>Completed Order</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] '>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>1</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>2</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>3</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>4</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>5</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>6</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>7</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>8</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>9</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>10</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-[15px] '>11</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
              <tr className='border-y border-[#E6EDFF]'>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000] py-4 '>12</th>
                <th className='font-Poppins font-[500] text-[12px] text-[#000000]  relative left-0 '>
                  <span className='flex items-center space-x-3 absolute left-8 top-2'>
                    <img src={avater} alt="/" />
                    <p>Frank Murlo</p>
                  </span>
                </th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>082345599504</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>312 S Wilmette Ave</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>N847.69</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>84</th>
                <th className=' font-Poppins font-[500] text-[12px] text-[#000000]  '>
                  <span className='relative'>
                    <svg className='absolute right-0' width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585786 3.41421C0.960859 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM8 0C7.46957 0 6.96086 0.210714 6.58579 0.585787C6.21071 0.96086 6 1.46957 6 2C6 2.53043 6.21071 3.03914 6.58579 3.41421C6.96086 3.78929 7.46957 4 8 4C8.53043 4 9.03914 3.78929 9.41421 3.41421C9.78929 3.03914 10 2.53043 10 2C10 1.46957 9.78929 0.96086 9.41421 0.585787C9.03914 0.210714 8.53043 0 8 0ZM14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0Z" fill="black"/>
                    </svg>
                  </span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <select className='mt-4 bg-[#F4F4F6] py-2 px-2 outline-none pr-4 '>
              <option>Show: 10</option>
            </select>
          </div>
          <div className='flex items-center flex-row space-x-2 mt-3 '>
            <div className='bg-[#F4F4F6] h-[46px] w-[46px] flex items-center justify-center rounded-sm  group-hover:bg-[#FF6600] '>
              <svg className=' fill-[#555B6A] group-hover:fill-white ' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2.28571L3.75 8L10 13.7143L8.75 16L0 8L8.75 0L10 2.28571Z" />
              </svg>
            </div>
            <div className='bg-[#F4F4F6] h-[46px] w-[46px] flex items-center justify-center rounded-sm hover:bg-[#FF6600] hover:text-white '>
              1
            </div>
            <div className='bg-[#F4F4F6] h-[46px] w-[46px] flex items-center justify-center rounded-sm hover:bg-[#FF6600] hover:text-white '>
              2
            </div>
            <div className='bg-[#F4F4F6] h-[46px] w-[46px] flex items-center justify-center rounded-sm hover:bg-[#FF6600] hover:text-white '>
              3
            </div>
            <div className='bg-[#F4F4F6] h-[46px] w-[46px] flex items-center justify-center rounded-sm hover:bg-[#FF6600]'>
              <svg className='fill-[#555B6A] hover:fill-white' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.7143L6.25 8L0 2.28571L1.25 0L10 8L1.25 16L0 13.7143Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Riders