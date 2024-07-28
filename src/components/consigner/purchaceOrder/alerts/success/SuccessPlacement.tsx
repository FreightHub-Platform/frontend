import Box from '@mui/material/Box'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/navigation';


const SucessPlacement = () => {

  const router = useRouter()

  const handleSubmit =() => {
    router.replace("/consigner/orders")
  }

  return (
    <Box component="section" sx={{ p: 2 }} className='w-2/3 bg-white py-8 rounded-lg'>
      <p className='text-4xl font-bold text-center mb-5'>Order Placement Successful!</p>
      <div className='flex flex-row justify-center my-5'>
        <CheckCircleOutlineIcon className='text-9xl text-green-500'/>
      </div>
      <Box component="section" className='text-2xl font-semibold text-center '>
        Please hold tight until a driver accept your shipment
        We will notify you when your shipments are accepted
      </Box>
      <p className='text-xl font-semibold text-center mt-10'>Go back to your Orders</p>
      <div className='flex justify-center mt-10'>
        <button className='bg-primary py-2 px-8 rounded-lg text-white hover:bg-orange-500' onClick={handleSubmit}>Back to Orders</button>
      </div>
    </Box>
  )
}

export default SucessPlacement