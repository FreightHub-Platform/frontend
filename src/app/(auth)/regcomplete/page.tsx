import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import Link from 'next/link';

const NotVerfied = () => {
  return(
    <div className='w-full h-full flex justify-center p-10'>
      <div>
        <div className='flex flex-col gap-9 w-full'>
          <p className='text-center text-7xl font-bold'>Account Not Verified</p>
          <div className='text-center'>
            <GppMaybeIcon className='text-[150px] text-orange-600'/>
          </div>
          <div className='text-3xl'>
            Your account has not been verified yet. Please verify your account to access our services. If you haven’t received a verification email, or if you need assistance, please contact our support team.
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
                <div>+94 72-899-4421</div> 
              </div>
              <div className='flex gap-3'>
                <Link href="/business_information"><div className='hover:underline text-blue-600'>Update your details</div></Link>
              </div>
              <div className='flex gap-3'>
                <Link href="/login"><div className='hover:underline text-blue-600'>Back to Login</div></Link>
              </div>
            </div>
          </div>
          <div className='text-3xl'>
            Thank you for your cooperation.
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotVerfied