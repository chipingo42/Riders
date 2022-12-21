import React from 'react'
import Admin from '../Admin';
import Analytics from './Analytics';
import Card from './Card';
import Navbar from './Navbar';
import OrderList from './OrderList';

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full mx-[20px]'>
      <Admin/>
      <div className='bg-white w-full h-full my-[28px] relative top-4 rounded-md px-[20px] py-5 '>
        <Navbar />
        <Card />
        <Analytics />
        <OrderList />
      </div>
    </div>
  )
}

export default Dashboard;