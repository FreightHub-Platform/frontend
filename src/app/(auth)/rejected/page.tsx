import BlockIcon from '@mui/icons-material/Block';
import Link from 'next/link';

const Blocked = () => {
  return(
    <div className='w-full h-full flex justify-center p-10'>
      <div>
        <div className='flex flex-col gap-9 w-full'>
          <p className='text-center text-7xl font-bold'>Account Temporarily Blocked</p>
          <div className='text-center'>
            <BlockIcon className='text-[150px] text-orange-600'/>
          </div>
          <div className='text-3xl'>
          Your account has been temporarily blocked by the administrator. To regain access, please contact our support team for assistance.
          </div>
          <div className='flex flex-col gap-2 text-2xl'>
            <div className='font-bold'>Support Contact:</div>
            <div>
              <div className='flex gap-3'>
                <div className='w-[100px] font-semibold'>Email:</div>
                <Link href="mailto:support@freighthub.com"><div className='hover:underline text-blue-600'>support@freighthub.com</div></Link>
              </div>
              <div className='flex gap-3'>
                <div className='w-[100px] font-semibold'>Phone:</div>
                <div>+123-456-7890</div> 
              </div>
            </div>
          </div>
          <div className='text-3xl'>
            Thank you for your understanding.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blocked