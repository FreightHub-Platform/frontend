"use client"

import Box from '@mui/material/Box';
import ProcessBox from '../../Auth/process/ProcessBox';
import OptimizeRoutes from './optimizeCard/OptimizeRoutes';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  p: 4,
};


const Prioratize = () => {

  const router = useRouter()

  const [openDecline, setDeclineOpen] = useState(false);
  const handleDeclineOpen = () => setDeclineOpen(true);
  const handleDeclineClose = () => setDeclineOpen(false);

  const [openSuccess, setSuccessOpen] = useState(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => setSuccessOpen(false);

  const [ordersDetails, setOrdersDetails] = useState({
    pickupDate: '',
    fromTime: '',
    toTime: '',
    purchaseOrders: []
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedOrderDetails = localStorage.getItem('ordersDetails');
      if (storedOrderDetails) {
        const parsedOrder = JSON.parse(storedOrderDetails);
        setOrdersDetails({
          pickupDate: parsedOrder.pickupDate || '',
          fromTime: parsedOrder.fromTime || '',
          toTime: parsedOrder.toTime || '',
          purchaseOrders: parsedOrder.orders || [] 
        });
      }
    }
  }, []);

  const fromDate = ordersDetails.fromTime ? Number(ordersDetails.fromTime.split(':')[0]) : 0;
  const toDate = ordersDetails.toTime ? Number(ordersDetails.toTime.split(':')[0]) : 0;

  const handleBack = () => {
    router.back()
  }

  return (
    <Box component="section" className='w-4/5'>
      <Box component="section" className='border-orange-500 border-2 rounded-md my-3 bg-white p-3 '>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/4 mx-auto'>
          <ProcessBox step={steps} completion={2}/>
        </Box>

        <div className='px-10 mt-2'>
         
         

          <div className='flex flex-row justify-between px-4'>
            <div>
              <button className='bg-gray-400 py-3 px-12 rounded-lg text-white hover:bg-gray-500 text-sm duration-500' onClick={handleBack}>Back</button>
            </div>
            <div className='flex flex-row gap-10 px-4'>
              <button className='bg-red-700 px-11 rounded-lg text-white hover:bg-red-800 text-sm duration-500' onClick={handleDeclineOpen}>
                Decline
              </button>
              <div>
                <Modal
                  open={openDecline}
                  onClose={handleDeclineClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <CanceledPlacement />
                  </Box>
                </Modal>
              </div>
              <button className='bg-success px-11 rounded-lg text-white hover:bg-green-500 text-sm duration-500' onClick={handleSuccessOpen}>
                Submit
              </button>
              <Modal
                open={openSuccess}
                onClose={handleSuccessClose}
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
      </Box>
    </Box>
  )
}

export default Prioratize