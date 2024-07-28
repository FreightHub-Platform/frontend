"use client"

import Box from '@mui/material/Box';
import ProcessBox from '../../Auth/process/ProcessBox';
import OptimizeRoutes from './optimizeCard/OptimizeRoutes';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CanceledPlacement from '../purchaceOrder/alerts/canceled/CanceledPlacement';
import SucessPlacement from '../purchaceOrder/alerts/success/SuccessPlacement';
import { useRouter } from 'next/navigation';

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
    status: true
  },
  {
    title: '',
    semTitle: 'Finalize',
    pathName: '/consigner/orders/new/finalize',
    status: false
  }
];


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '65%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '16px',
  width: 1100,
};


const Prioratize = () => {

  const router = useRouter()

  const [openDecline, setDeclineOpen] = useState(false);
  const handleDeclineOpen = () => setDeclineOpen(true);
  const handleDeclineClose = () => setDeclineOpen(false);

  const [openSuccess, setSuccessOpen] = useState(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => setSuccessOpen(false);

  const handleBack = () => {
    router.back()
  }

  return (
    <Box component="section" className='w-4/5'>
      <Box component="section" className='border-orange-500 border-2 rounded-md my-3 bg-white p-3 '>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/4 mx-auto'>
          <ProcessBox step={steps} completion={2}/>
        </Box>

      <div className='px-10'>
        <div className='my-4 '>
          <div className='text-2xl font-semibold mb-3'>Order Fulfillment Plan</div>
          <div className='flex flex-row justify-center gap-5'>
            <div className='border-2 flex-1 py-3 px-3 rounded-lg shadow-lg'>
              <div className='text-sm font-semibold mb-2'>
                <span className='bg-red-300 px-2 px-5 py-1 rounded-xl'>Pickup</span>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Pickup Location:</p>
                <p className='text-sm'>SAMAN STORES JAFFNA</p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Pickup Date:</p>
                <p className='text-sm'>10/10/2030</p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Pickup Time:</p>
                <p className='text-sm'>1:00 AM - 2:00 AM</p>
              </div>
            </div>
            <div className='border-2 flex-1 py-3 px-3 rounded-lg shadow-lg'>
              <div className='text-sm font-semibold mb-2'>
                <span className='bg-red-300 px-2 px-5 py-1 rounded-xl'>Total</span>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Estimated Cost:</p>
                <p className='text-sm'>Rs. 2</p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Total Distance:</p>
                <p className='text-sm'>5cm</p>
              </div>
              <div className='flex flex-row items-center'>
                <p className='text-sm font-semibold mr-1'>Total No of Vehicles:</p>
                <p className='text-sm'>3</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-2xl font-semibold mb-3'>Optimized Routes</div>
          <div className='flex flex-col gap-3'>
            <OptimizeRoutes />
          </div>

          <div className='flex flex-row justify-between px-4'>
            <div>
              <button className='bg-primary py-1 px-12 rounded-lg text-white hover:bg-orange-500 text-sm duration-500' onClick={handleBack}>Back</button>
            </div>
            <div className='flex flex-row gap-10 px-4'>
              <button className='bg-red-700 py-1 px-12 rounded-lg text-white hover:bg-red-800 text-sm duration-500' onClick={handleDeclineOpen}>
                Decline
              </button>
              <Modal
                open={openDecline}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <CanceledPlacement />
                </Box>
              </Modal>
              <button className='bg-primary py-1 px-12 rounded-lg text-white hover:bg-orange-500 text-sm duration-500' onClick={handleSuccessOpen}>
                Next
              </button>
              <Modal
                open={openSuccess}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <SucessPlacement />
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      </Box>
    </Box>
  )
}

export default Prioratize