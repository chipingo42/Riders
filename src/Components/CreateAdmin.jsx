import React from 'react'

const CreateAdmin = ({ visible , onClose }) => {

  const closeAdmin = (e) => {
    if(e.target.id === 'createAdmin') onClose()
  }
  if(!visible) return null

  return (
    <div id='createAdmin' className='bg-[#0000004D] h-full w-full fixed left-0 z-10 top-0 ' onClick={closeAdmin}>
      <div className='absolute right-[35%] top-[15%] bg-white w-[300px] h-[420px] rounded-md'>
        <h1 className='flex justify-center font-Mulish font-[700] text-[20px] text-[#000000] pt-[27px] '>Create Admin</h1>
        <form className='px-[30px] '>
          <div className='my-3'>
            <input type="text" placeholder='Ener Name' className='border outline-none border-[#E0E7EB] w-full py-2 rounded-md pl-2 placeholder:text-[#4D708D] font-Mulish font-[400] text-[14px] ' />
          </div>
          <div className='my-3'>
            <select className=' appearance-none  border border-[#E0E7EB] w-full py-2 pl-2 text-[#4D708D] font-Mulish font-[400] text-[14px] rounded-md outline-none '>
              <option>Select Role</option>
            </select>
          </div>
          <div className='my-3'>
            <select className=' appearance-none  border border-[#E0E7EB] w-full py-2 pl-2 text-[#4D708D] font-Mulish font-[400] text-[14px] rounded-md outline-none '>
              <option>Select Priviledges</option>
            </select>
          </div>
          <div className='my-3'>
            <select className=' appearance-none  border border-[#E0E7EB] w-full py-2 pl-2 text-[#4D708D] font-Mulish font-[400] text-[14px] rounded-md outline-none '>
              <option>Select Tasks</option>
            </select>
          </div>
          <div className='my-3'>
            <select className=' appearance-none  border border-[#E0E7EB] w-full py-2 pl-2 text-[#4D708D] font-Mulish font-[400] text-[14px] rounded-md outline-none '>
              <option>Enter Department</option>
            </select>
          </div>
          <div className=' w-[140px] h-[50px] mt-[30px] bg-[#FF6600] flex items-center justify-center rounded-md ml-10 '>
            <p className=' font-Mulish font-[500] text-[16px] text-[#FFFFFF] '>Add Terminal</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAdmin;