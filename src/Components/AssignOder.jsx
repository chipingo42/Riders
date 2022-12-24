import React from 'react'

const AssignOder = ({ visible, onClose }) => {

  const closeAssign = (e) => {
    if(e.target.id === 'Assign') onClose()
  }
  if(!visible) return null;

  return (
    <div id='Assign' className='bg-[#0000004D] h-full w-full fixed left-0 z-10 top-0 ' onClick={closeAssign}>
      <div className='absolute right-[35%] top-[15%] bg-white w-[380px] h-[343px] rounded-md'>
        <h1 className='flex justify-center font-Mulish font-[700] text-[20px] text-[#000000] pt-[43px] '>Assign Order</h1>
        <div className='px-[50px]'>
          <select className='border border-[#E0E7EB] w-full py-2 mt-[37px] font-Mulish font-[400] text-[14px] text-[#4D708D] outline-none rounded-sm  '>
            <option>Assign Rider</option>
          </select>
          <button className='ml-16 py-2 px-10 bg-[#FF6600] mt-[87px] text-white rounded-md'>Assign</button>
        </div>
      </div>
    </div>
  )
}

export default AssignOder;