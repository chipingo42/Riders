import React from 'react'
import { Link } from 'react-router-dom';
import {BsGrid} from 'react-icons/bs'
import {MdOutlineEventNote} from 'react-icons/md'

const SideMenu = () => {
  return (
    <div className='bg-white min-h-[900px] w-[250px] relative ml-1'>
      <div className='flex flex-col space-y-6 relative '>
        <div className='py-10 border-b'>
          <svg className='absolute right-4 top-4 ' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9167 18.7552C22.9167 19.3281 22.4522 19.7916 21.8803 19.7916H13.5365C13.2617 19.7916 12.998 19.6824 12.8037 19.4881C12.6093 19.2937 12.5001 19.0301 12.5001 18.7552C12.5001 18.4803 12.6093 18.2167 12.8037 18.0223C12.998 17.8279 13.2617 17.7187 13.5365 17.7187H21.8803C22.1552 17.7187 22.4188 17.8279 22.6132 18.0223C22.8076 18.2167 22.9167 18.4803 22.9167 18.7552Z" fill="#555B6A"/>
            <path d="M22.9167 12.4999C22.9167 13.0728 22.4522 13.5364 21.8803 13.5364L3.11987 13.5364C2.84499 13.5364 2.58136 13.4272 2.38699 13.2328C2.19261 13.0384 2.08341 12.7748 2.08341 12.4999C2.08341 12.225 2.19261 11.9614 2.38699 11.767C2.58136 11.5727 2.84499 11.4635 3.11987 11.4635L21.8803 11.4635C22.1552 11.4635 22.4188 11.5727 22.6132 11.767C22.8076 11.9614 22.9167 12.225 22.9167 12.4999Z" fill="#555B6A"/>
            <path d="M21.8803 7.28125C22.1552 7.28125 22.4188 7.17205 22.6132 6.97768C22.8076 6.78331 22.9167 6.51968 22.9167 6.24479C22.9167 5.9699 22.8076 5.70628 22.6132 5.5119C22.4188 5.31753 22.1552 5.20833 21.8803 5.20833L9.36987 5.20833C9.09499 5.20833 8.83136 5.31753 8.63698 5.5119C8.44261 5.70628 8.33341 5.9699 8.33341 6.24479C8.33341 6.51968 8.44261 6.78331 8.63698 6.97768C8.83136 7.17205 9.09499 7.28125 9.36987 7.28125L21.8803 7.28125Z" fill="#555B6A"/>
          </svg>
        </div>
        <div className='flex flex-col space-y-4 mx-[20px] '>
          <Link to="/">
            <div className='flex items-center space-x-2 px-4 rounded-sm  py-2 group hover:bg-[#133040]'>
              <BsGrid className='group-hover:text-white' />
              <p className=' font-Mulish font-[600] text-[16px] group-hover:text-white '>Dashboard</p>
            </div>
          </Link>
          <Link to="/Riders">
            <div className='flex items-center space-x-2 px-4 rounded-sm  py-2 group hover:bg-[#133040]'>
              <span>
                <svg className=' fill-[#555B6A] group-hover:fill-white ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0H0V5.05263H0.8V14.3158C0.8 14.7625 0.968571 15.1909 1.26863 15.5067C1.56869 15.8226 1.97565 16 2.4 16H13.6C14.0243 16 14.4313 15.8226 14.7314 15.5067C15.0314 15.1909 15.2 14.7625 15.2 14.3158V5.05263H16V0ZM1.6 1.68421H14.4V3.36842H1.6V1.68421ZM13.6 14.3158H2.4V5.05263H13.6V14.3158ZM5.6 6.73684H10.4C10.4 7.18352 10.2314 7.61191 9.93137 7.92776C9.63131 8.24361 9.22435 8.42105 8.8 8.42105H7.2C6.77565 8.42105 6.36869 8.24361 6.06863 7.92776C5.76857 7.61191 5.6 7.18352 5.6 6.73684Z"/>
                </svg>
              </span>
              <p className=' font-Mulish font-[600] text-[16px] group-hover:text-white '>Riders</p>
            </div>
          </Link>
          <Link to="/Orders">
            <div className='flex items-center space-x-2 px-4 rounded-sm  py-2 group hover:bg-[#133040]'>
              <MdOutlineEventNote className=' text-[20px] text-[#555B6A] group-hover:text-white ' />
              <p className=' font-Mulish font-[600] text-[16px] group-hover:text-white '>Orders</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenu;