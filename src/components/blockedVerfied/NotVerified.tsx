import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import Link from 'next/link';

const NotVerified = () => {
  return(
    <div className='w-11/12 flex justify-center'>
      <div className='bg-white rounded-lg border-orange-500 border-2 p-10 w-4/5'>
        <div className='flex flex-col gap-5 w-full'>
          <p className='text-center text-4xl font-bold'>Account Not Verified</p>
          <div className='text-center'>
            <GppMaybeIcon className='text-[120px] text-orange-600'/>
          </div>
          <div className='text-2xl'>
            Your account has not been verified yet. Please verify your account to access our services. If you haven’t received a verification email, or if you need assistance, please contact our support team.
          </div>
          <div className='flex flex-col gap-2 text-xl'>
            <div className='font-semibold'>Support Contact:</div>
            <div>
              <div className='flex gap-3'>
                <div className='w-[60px] font-medium'>Email:</div>
                <Link href=""><div className='hover:underline text-blue-600'>support@example.com</div></Link>
              </div>
              <div>
                <div className='w-[60px] font-medium'>Phone:</div>
                <div>+123-456-7890</div> 
              </div>
            </div>
          </div>
          <div className='text-2xl'>
            Thank you for your cooperation.
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default NotVerified