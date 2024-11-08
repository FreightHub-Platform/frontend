"use client"

import Box from '@mui/material/Box';
import ProcessBox from '../../Auth/process/ProcessBox';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import CanceledPlacement from '../purchaceOrder/alerts/canceled/CanceledPlacement';
import SucessPlacement from '../purchaceOrder/alerts/success/SuccessPlacement';
import { useRouter } from 'next/navigation';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


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
          purchaseOrders: parsedOrder.purchaseOrders || [] 
        });
      }
    }
  }, []);

  const fromDate = ordersDetails.fromTime ? Number(ordersDetails.fromTime.split(':')[0]) : 0;
  const toDate = ordersDetails.toTime ? Number(ordersDetails.toTime.split(':')[0]) : 0;

  const done = false

  const handleBack = () => {
    router.back()
  }

  // console.log(ordersDetails)

  return (
    <Box component="section" className='w-4/5'>
      <Box component="section" className='border-orange-500 border-2 rounded-md bg-white p-2 '>
        <Box component="section" sx={{ p: 1, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/4 mx-auto'>
          <ProcessBox step={steps} completion={2}/>
        </Box>

        <div className='mt-2 text-sm'>
          <div className='bg-slate-200 rounded-lg p-2 ps-4 shadow-md mb-2 mx-1'>
            <table>
              <tbody className='flex flex-col gap-1'>
                <tr>
                  <td className='font-semibold w-[120px]'>Pickup location:</td>
                  <td>Pambaya</td>
                </tr>
                <tr>
                  <td className='font-semibold w-[120px]'>Pickup date:</td>
                  <td>{ordersDetails.pickupDate}</td>
                </tr>
                <tr>
                  <td className='font-semibold w-[120px]'>Pickup time:</td>
                  <td>{ordersDetails.fromTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-4 flex flex-col gap-2 max-h-[340px] overflow-auto shadow-inner custom-scrollbar-horizontal'>
            {ordersDetails.purchaseOrders.map((detail, index) => (
              <div className='border-black border-2 rounded-lg p-4' key={index}>
              <div className='grid grid-cols-2 mb-3 ms-4'>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className='font-semibold w-[140px]'>Order number:</td>
                          <td>PO{detail.poNumber}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Date:</td>
                          <td>{detail.dropDate}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Drop-off time:</td>
                          <td>{detail.dropTime}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Allow load sharing:</td>
                          <td className={detail.ltlFlag ? "text-green-500" : "text-red-500"}>{detail.ltlFlag ? <DoneIcon /> : <CloseIcon /> }</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className='font-semibold w-[125px]'>Store name:</td>
                          <td>{detail.storeName}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Address:</td>
                          <td>{detail.address}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Email:</td>
                          <td>{detail.email}</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Contact number:</td>
                          <td>{detail.contactNumber}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className='mb-3 font-bold border-black border-1'></div>
              <div className='flex justify-center px-10'>
                <table className='w-full text-center'>
                  <thead className='bg-orange-300'>
                    <tr>
                      <td className='w-[100px] py-1 border-r border-slate-300 rounded-tl-lg'>Item Name</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Weight(kg)</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>CBM</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Item Type</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Fragile</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Perishable</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Refrigerated</td>
                      <td className='w-[100px] py-1 rounded-tr-lg'>Hazardous</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      detail.items.map((item, index) => (
                        <tr className='border-b border-slate-300' key={index}>
                          <td className='border-l border-slate-300'>{item.itemName}</td>
                          <td className='border-r border-slate-300'>{item.weight}</td>
                          <td className='border-r border-slate-300'>{item.cbm}</td>
                          <td className='border-r border-slate-300'>{item.iTypeId.split(',')[1]}</td>
                          <td className={item.fragile ? "border-r birder-slate-300 text-green-500" : "border-r border-slate-300 text-red-500"} >{item.fragile ? <DoneIcon /> : <CloseIcon />}</td>
                          <td className={item.perishable ? "border-r birder-slate-300 text-green-500" : "border-r border-slate-300 text-red-500"}>{item.perishable ? <DoneIcon /> : <CloseIcon />}</td>
                          <td className={item.refrigerated ? "border-r birder-slate-300 text-green-500" : "border-r border-slate-300 text-red-500"}>{item.refrigerated ? <DoneIcon /> : <CloseIcon />}</td>
                          <td className={item.hazardous ? "border-r birder-slate-300 text-green-500" : "border-r border-slate-300 text-red-500"}>{item.hazardous ? <DoneIcon /> : <CloseIcon />}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              </div>
            ) )
              
            }
            {/* <div className='border-black border-2 rounded-lg p-4'>
              <div className='grid grid-cols-2 mb-3 ms-4'>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className='font-semibold w-[140px]'>Order number:</td>
                          <td>Pambaya</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Date:</td>
                          <td>Pambaya</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Drop-off time:</td>
                          <td>Pambaya</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[140px]'>Allow load sharing:</td>
                          <td className={done ? "text-green-500" : "text-red-500"}>{done ? <DoneIcon /> : <CloseIcon /> }</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className='font-semibold w-[125px]'>Store name:</td>
                          <td>Pambaya</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Address:</td>
                          <td>No 293/04/D Adihata Road Dalupotha Negombo</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Email:</td>
                          <td>Pambaya</td>
                        </tr>
                        <tr>
                          <td className='font-semibold w-[125px]'>Contact number:</td>
                          <td>Pambaya</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className='mb-3 font-bold border-black border-1'></div>
              <div className='flex justify-center px-10'>
                <table className='w-full text-center'>
                  <thead className='bg-orange-300'>
                    <tr>
                      <td className='w-[100px] py-1 border-r border-slate-300 rounded-tl-lg'>Item Name</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Weight(kg)</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>CBM</td>
                      <td className='w-[100px] py-1 border-r border-slate-300'>Item Type</td>
                      <td className='w-[100px] py-1 rounded-tr-lg'>Specific Type</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-slate-300'>
                      <td className='border-l border-slate-300'>asd</td>
                      <td className='border-r border-slate-300'>dsd</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>ds</td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                      <td className='border-l border-slate-300'>asd</td>
                      <td className='border-r border-slate-300'>dsd</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>ds</td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                      <td className='border-l border-slate-300'>asd</td>
                      <td className='border-r border-slate-300'>dsd</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>ds</td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                      <td className='border-l border-slate-300'>asd</td>
                      <td className='border-r border-slate-300'>dsd</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>sds</td>
                      <td className='border-r border-slate-300'>ds</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div> */}
          </div> 
        </div>
        <div className='flex flex-row justify-between px-4 mt-3'>
            <div>
              <button className='bg-gray-400 py-2 px-12 rounded-lg text-white hover:bg-gray-500 text-sm duration-500' onClick={handleBack}>Back</button>
            </div>
            <div className='flex flex-row gap-4 px-4'>
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
      </Box>
    </Box>
  )
}

export default Prioratize