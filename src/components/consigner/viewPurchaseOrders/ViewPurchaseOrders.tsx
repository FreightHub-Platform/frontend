"use client"

import Box from '@mui/material/Box';
import ProcessBox from '../../Auth/process/ProcessBox';
import AddItem from './addItem/AddItem';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import PurchaseOrder from '../purchaceOrder/PurchaseOrder';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import './styles.css';


const steps = [
  {
    title: '',
    semTitle: 'Pickup Information',
    pathName: '/consigner/orders/new/pickup_information',
    status: true
  },
  {
    title: '',
    semTitle: 'Purchase Order',
    pathName: '/consigner/orders/new/purchase_order',
    status: false
  },
  {
    title: '',
    semTitle: 'Finalize',
    pathName: '/finalize',
    status: false
  }
];


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '16px',
  width: 1100,
};

const ViewPurchaseOrders = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [details, setDetails] = useState([]);
  
  const handleNext = () => {
    router.push("/consigner/orders/new/finalize");
  }

  const handlePurchaseOrder = (newDetail) => {
    setDetails(prevDetails => [...prevDetails, newDetail]);
    handleClose();
  }

  const handleCancelPurchaseOrder = (index) => {
    setDetails(prev => prev.filter((_, i) => i !== index));
  }

  const fromDate = Number(searchParams.get('from').split(':')[0])
  const toDate = Number(searchParams.get('to').split(':')[0])

  return (
    <Box component="section" className='w-4/5'>
      {/* <h1 className="text-2xl font-semibold text-center">New Order</h1> */}
      <Box component="section" className='border-orange-500 border-2 rounded-md my-3 bg-white p-3'>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/5 mx-auto'>
          <ProcessBox step={steps} completion={1}/>
        </Box>

        <Box component="section" className='my-3 px-5 py-2 shadow-lg rounded-lg'>
          <div className='font-semibold text-sm'>
            <span className='bg-rose-200 px-4 py-1 rounded-3xl'>Pickup</span>  
          </div>
          <div className='flex flex-row justify-between px-2 mt-2 items-center'>
            <div className='flex flex-col'>
              <div className='flex items-center'>
                <p className='font-semibold mr-1 text-xs'>Pickup Location:</p>
                <p className='text-xs'>Saman Stores Jaffna</p>
              </div>
              <div className='flex items-center'>
                <p className='font-semibold mr-1 text-xs'>Pickup Date:</p>
                <p className='text-xs'>{searchParams.get('picupDate')}</p>
              </div>
              <div className='flex items-center'>
                <p className='font-semibold mr-1 text-xs'>Pickup Time:</p>
                <p className='text-xs'>{searchParams.get('from')}{(fromDate > 0 && fromDate < 12) ? ' AM' : ' PM'} - {searchParams.get('to')}{(toDate > 0 && toDate < 12) ? ' AM' : ' PM'}</p>
              </div>
            </div>
            <button className='bg-primary py-1 px-4 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={handleOpen}>+ Add a Purchase Order</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <PurchaseOrder closeFunction={handlePurchaseOrder}/>
              </Box>
            </Modal>
          </div>
        </Box>

        <Box component="section" className='my-2 h-60 overflow-y-auto custom-scrollbar px-4'>
          {details.map((detail, index) => (
            <AddItem 
              order={detail} 
              key={index} 
              cancelOrder={() => handleCancelPurchaseOrder(index)} 
            />
          ))}
        </Box>
        <div className='flex flex-row justify-between px-10'>
          <button className='bg-primary py-1 px-10 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={() => router.back()}>Back</button>
          <button className='bg-primary py-1 px-10 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={handleNext}>Next</button>
        </div>
      </Box>
    </Box>
  )
}

export default ViewPurchaseOrders;
