import React from 'react'

const Card = () => {
  return (
    <div className=' mt-[59px] border border-[#E6EDFF] h-[142px] rounded-md'>
      <div className='flex justify-between px-[10px]'>
        <div className='flex pt-[30px]'>
          <div className='flex flex-col'>
            <h1 className=' font-Mulish font-[700] text-[24px] text-[#000000] '>89,935</h1>
            <p className=' font-Mulish font-[600] text-[14px] text-[#000000] '>Total Drivers </p>
            <div className='flex items-center space-x-3'>
              <span>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.21375 0.296753C3.06297 0.447528 2.97061 0.657055 2.97091 0.887159L2.97091 0.988437C2.97091 1.44924 3.34394 1.82227 3.80415 1.82168L8.35707 1.82168L0.655317 9.52344C0.330048 9.84871 0.330048 10.3767 0.655317 10.7019C0.980586 11.0272 1.50856 11.0272 1.83383 10.7019L9.53558 3.00019V7.55311C9.53558 8.01391 9.90862 8.38695 10.3688 8.38636H10.4701C10.9309 8.38636 11.3039 8.01332 11.3034 7.55311V0.887159C11.3034 0.426361 10.9303 0.0533255 10.4701 0.0539148L3.80415 0.0539148C3.57375 0.0539147 3.36452 0.145977 3.21375 0.296753Z" fill="#34C759"/>
                </svg>
              </span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>10.2</span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>+1.01% this week</span>
            </div>
          </div>
          <div className=' w-[44px] h-[44px] shadow-lg rounded-lg flex items-center justify-center '>
            <span>
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.85002 5.00002C3.85002 3.26033 5.26033 1.85002 7.00002 1.85002C8.73972 1.85002 10.15 3.26033 10.15 5.00002C10.15 6.73972 8.73972 8.15002 7.00002 8.15002C5.26033 8.15002 3.85002 6.73972 3.85002 5.00002ZM7.00002 0.150024C4.32144 0.150024 2.15002 2.32144 2.15002 5.00002C2.15002 7.67861 4.32144 9.85003 7.00002 9.85003C9.67861 9.85003 11.85 7.67861 11.85 5.00002C11.85 2.32144 9.67861 0.150024 7.00002 0.150024ZM1.85002 14.9167C1.85002 14.5137 2.17867 13.9979 3.21839 13.5388C4.20792 13.1018 5.58426 12.85 7.00002 12.85C8.39573 12.85 9.77092 13.1431 10.7679 13.6047C11.2669 13.8357 11.6328 14.0912 11.863 14.3378C12.0846 14.5753 12.1477 14.7656 12.15 14.9085C12.1419 14.9301 12.1051 14.9982 11.9627 15.1088C11.7443 15.2786 11.3797 15.4616 10.865 15.6271C9.84459 15.955 8.43632 16.15 7.00002 16.15C5.30152 16.15 3.90338 15.9521 2.96133 15.6316C2.48766 15.4704 2.18108 15.2955 2.00771 15.1425C1.84896 15.0024 1.84988 14.9287 1.85002 14.9174L1.85002 14.9167ZM12.1519 14.9011C12.1521 14.9011 12.1519 14.903 12.1506 14.9068C12.1511 14.903 12.1517 14.9011 12.1519 14.9011ZM7.00002 11.15C5.41579 11.15 3.79212 11.4271 2.53166 11.9837C1.32137 12.5181 0.150024 13.4607 0.150024 14.9167C0.150024 15.5456 0.467576 16.0507 0.882959 16.4173C1.28772 16.7744 1.82489 17.0406 2.41372 17.241C3.59666 17.6435 5.19852 17.85 7.00002 17.85C8.56372 17.85 10.1555 17.6407 11.3851 17.2455C11.9953 17.0494 12.5683 16.7913 13.0061 16.451C13.4404 16.1134 13.85 15.6034 13.85 14.9167C13.85 14.2271 13.5361 13.639 13.1058 13.1779C12.6797 12.7213 12.1082 12.3518 11.4821 12.062C10.2291 11.4819 8.60432 11.15 7.00002 11.15ZM13.1539 8.91849C13.199 8.45122 13.6143 8.10892 14.0816 8.15394C15.2957 8.27095 16.4222 8.58656 17.2734 9.07881C18.0978 9.55551 18.85 10.32 18.85 11.3733C18.85 11.9192 18.6411 12.4171 18.2349 12.8126C17.852 13.1855 17.3292 13.435 16.7319 13.6043C16.2802 13.7323 15.8103 13.47 15.6823 13.0184C15.5542 12.5667 15.8165 12.0968 16.2682 11.9688C16.7158 11.8419 16.943 11.6978 17.0488 11.5947C17.1314 11.5143 17.15 11.4536 17.15 11.3733C17.15 11.2166 17.0328 10.9034 16.4224 10.5505C15.8389 10.213 14.9654 9.94699 13.9185 9.84611C13.4512 9.80108 13.1089 9.38577 13.1539 8.91849ZM15 0.150024C14.5306 0.150024 14.15 0.530582 14.15 1.00002C14.15 1.46947 14.5306 1.85002 15 1.85002C15.9113 1.85002 16.65 2.58875 16.65 3.50002C16.65 4.41129 15.9113 5.15002 15 5.15002C14.5306 5.15002 14.15 5.53058 14.15 6.00002C14.15 6.46947 14.5306 6.85002 15 6.85002C16.8502 6.85002 18.35 5.35018 18.35 3.50002C18.35 1.64987 16.8502 0.150024 15 0.150024Z" fill="#347AE2"/>
              </svg>
            </span>
          </div>
          <div className='border border-[#E6EDFF] ml-[30px]'></div>
        </div>
        <div className='flex pt-[26px]'>
          <div className='flex flex-col'>
            <h1 className=' font-Mulish font-[700] text-[24px] text-[#000000] '>89,935</h1>
            <p className=' font-Mulish font-[600] text-[14px] text-[#000000] '>Total Drivers </p>
            <div className='flex items-center space-x-3'>
              <span>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.21375 0.296753C3.06297 0.447528 2.97061 0.657055 2.97091 0.887159L2.97091 0.988437C2.97091 1.44924 3.34394 1.82227 3.80415 1.82168L8.35707 1.82168L0.655317 9.52344C0.330048 9.84871 0.330048 10.3767 0.655317 10.7019C0.980586 11.0272 1.50856 11.0272 1.83383 10.7019L9.53558 3.00019V7.55311C9.53558 8.01391 9.90862 8.38695 10.3688 8.38636H10.4701C10.9309 8.38636 11.3039 8.01332 11.3034 7.55311V0.887159C11.3034 0.426361 10.9303 0.0533255 10.4701 0.0539148L3.80415 0.0539148C3.57375 0.0539147 3.36452 0.145977 3.21375 0.296753Z" fill="#34C759"/>
                </svg>
              </span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>10.2</span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>+1.01% this week</span>
            </div>
          </div>
          <div className=' w-[44px] h-[44px] shadow-lg rounded-lg flex items-center justify-center '>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.89281 3.29023C5.95947 2.82481 6.1017 2.56811 6.3032 2.39539C6.63851 2.10798 7.36297 1.85002 9.00002 1.85002C10.6371 1.85002 11.3615 2.10798 11.6969 2.39539C11.8987 2.56838 12.041 2.82561 12.1075 3.29243C11.2013 3.18947 10.1687 3.15002 9.00002 3.15002C7.83003 3.15002 6.79777 3.18959 5.89281 3.29023ZM4.15891 3.6032C4.20285 2.67767 4.42673 1.76476 5.19685 1.10466C6.0282 0.392068 7.30375 0.150024 9.00002 0.150024C10.6963 0.150024 11.9718 0.392068 12.8032 1.10466C13.5763 1.76732 13.7989 2.68476 13.8416 3.61398C14.7273 3.86095 15.4776 4.23422 16.0805 4.79772C17.2614 5.90161 17.6879 7.55946 17.8092 9.73896C17.8357 9.82122 17.85 9.90895 17.85 10C17.85 10.1577 17.8469 10.3169 17.8387 10.4766C17.8466 10.7793 17.85 11.0911 17.85 11.4118C17.85 13.8466 17.5321 15.8446 16.0663 17.1541C14.6393 18.429 12.3374 18.85 9.00002 18.85C7.31521 18.85 5.91604 18.768 4.77127 18.5397C3.62224 18.3105 2.67025 17.9227 1.9347 17.2676C0.455278 15.95 0.150024 13.8223 0.150024 11C0.150024 10.7798 0.151882 10.5639 0.156011 10.3522C0.151764 10.2343 0.150024 10.1167 0.150024 10C0.150024 9.93311 0.157757 9.868 0.172378 9.80554C0.264566 7.57216 0.671862 5.85718 1.9347 4.73246C2.53531 4.19754 3.28024 3.84084 4.15891 3.6032ZM1.85702 10.341C1.91096 7.91926 2.2797 6.70168 3.06535 6.00196C3.49647 5.618 4.12781 5.32221 5.10378 5.12755C6.08401 4.93205 7.35151 4.85002 9.00002 4.85002C10.6493 4.85002 11.9142 4.93218 12.8914 5.133C13.8623 5.33253 14.4892 5.63738 14.9196 6.03964C15.6917 6.76138 16.0647 8.0152 16.1369 10.459C16.1137 10.8253 16.0586 11.1213 15.9613 11.3695C15.837 11.6868 15.6282 11.9659 15.2262 12.2153C14.3434 12.763 12.5692 13.15 9.00607 13.15C5.44326 13.15 3.66526 12.7631 2.77898 12.2147C2.37506 11.9648 2.16503 11.6851 2.03999 11.368C1.93198 11.094 1.87554 10.7617 1.85702 10.341ZM15.9827 13.743C15.8014 14.7423 15.4647 15.412 14.9337 15.8864C14.0274 16.696 12.3293 17.15 9.00002 17.15C7.35151 17.15 6.08401 17.068 5.10378 16.8725C4.12781 16.6778 3.49647 16.3821 3.06535 15.9981C2.54773 15.5371 2.21107 14.8513 2.02619 13.7444C3.37574 14.5116 5.56842 14.85 9.00607 14.85C12.4448 14.85 14.6357 14.5114 15.9827 13.743ZM6.15002 11C6.15002 10.5306 6.53058 10.15 7.00002 10.15H11C11.4695 10.15 11.85 10.5306 11.85 11C11.85 11.4695 11.4695 11.85 11 11.85L7.00002 11.85C6.53058 11.85 6.15002 11.4695 6.15002 11Z" fill="#347AE2"/>
              </svg>
          </div>
          <div className='border border-[#E6EDFF] ml-[30px]'></div>
        </div>
        <div className='flex pt-[26px]'>
          <div className='flex flex-col'>
            <h1 className=' font-Mulish font-[700] text-[24px] text-[#000000] '>89,935</h1>
            <p className=' font-Mulish font-[600] text-[14px] text-[#000000] '>Total Drivers </p>
            <div className='flex items-center space-x-3'>
              <span>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.21375 0.296753C3.06297 0.447528 2.97061 0.657055 2.97091 0.887159L2.97091 0.988437C2.97091 1.44924 3.34394 1.82227 3.80415 1.82168L8.35707 1.82168L0.655317 9.52344C0.330048 9.84871 0.330048 10.3767 0.655317 10.7019C0.980586 11.0272 1.50856 11.0272 1.83383 10.7019L9.53558 3.00019V7.55311C9.53558 8.01391 9.90862 8.38695 10.3688 8.38636H10.4701C10.9309 8.38636 11.3039 8.01332 11.3034 7.55311V0.887159C11.3034 0.426361 10.9303 0.0533255 10.4701 0.0539148L3.80415 0.0539148C3.57375 0.0539147 3.36452 0.145977 3.21375 0.296753Z" fill="#34C759"/>
                </svg>
              </span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>10.2</span>
              <span className=' font-Mulish font-[600] text-[14px] text-[#7C8DB5] '>+1.01% this week</span>
            </div>
          </div>
          <div className=' w-[44px] h-[44px] shadow-lg rounded-lg flex items-center justify-center '>
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.85002 10C1.85002 5.4989 5.4989 1.85002 10 1.85002C10.8909 1.85002 11.7468 1.99266 12.5471 2.2557C12.9931 2.40228 13.4734 2.15958 13.62 1.71361C13.7666 1.26764 13.5239 0.787283 13.0779 0.6407C12.1085 0.322055 11.0735 0.150024 10 0.150024C4.56002 0.150024 0.150024 4.56002 0.150024 10C0.150024 15.44 4.56002 19.85 10 19.85C15.44 19.85 19.85 15.44 19.85 10C19.85 9.53058 19.4695 9.15002 19 9.15002C18.5306 9.15002 18.15 9.53058 18.15 10C18.15 14.5011 14.5011 18.15 10 18.15C5.4989 18.15 1.85002 14.5011 1.85002 10ZM17.6024 5.59976C17.9336 5.2671 17.9324 4.72891 17.5998 4.39768C17.2671 4.06646 16.7289 4.06762 16.3977 4.40029L10.0496 10.776L7.62095 8.17807C7.30036 7.83514 6.76248 7.81703 6.41955 8.13762C6.07662 8.45821 6.05851 8.99609 6.3791 9.33902L9.4094 12.5805C9.56696 12.749 9.78626 12.8463 10.0169 12.8499C10.2476 12.8536 10.4699 12.7633 10.6327 12.5998L17.6024 5.59976Z" fill="#347AE2"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card