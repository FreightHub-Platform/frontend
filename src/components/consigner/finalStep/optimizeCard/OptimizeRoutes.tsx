import Box from '@mui/material/Box';

const OptimizeRoutes = () => {
  return (
    <Box component="section" className='flex flex-row justify-center pb-3'>
      <div className='w-2/3 shadow-lg rounded-lg border-orange-300 border-2 py-3'>
        <div className='flex flex-row justify-between px-8 mb-4 items-center'>
          <div className='bg-orange-300 px-5 py-1 rounded-3xl text-sm font-semibold'>Route 1</div>
          <div className='flex fles-row gap-8'>
            <div className='bg-slate-300 px-4 py-1 rounded-3xl text-sm font-semibold'>Flat-Bed 20ft</div>
            <div className='bg-slate-300 px-4 py-1 rounded-3xl text-sm font-semibold'>1PM - 3PM</div>
            <div className='bg-slate-300 px-4 py-1 rounded-3xl text-sm font-semibold'>LKR 45000</div>
          </div>
        </div>
        <div className='flex flex-row justify-center gap-3 items-center'>
          <div className='flex flex-row gap-3 items-center'>
            <div className='bg-orange-400 px-2 rounded-3xl text-sm'>1</div>
            <div>
              <div className='text-sm font-semibold'>PO 123</div>
              <div className='text-xs text-orange-600 cursor-pointer hover:underline'>Prioratize</div>
            </div>
          </div>
          <hr style={{ height: '1px', backgroundColor: 'slategray', border: 'none' }} className='w-12' />

          <div className='flex flex-row gap-3 items-center'>
            <div className='bg-orange-400 px-2 rounded-3xl text-sm'>2</div>
            <div>
              <div className='text-sm font-semibold'>PO 456</div>
              <div className='text-xs text-orange-600 cursor-pointer hover:underline'>Prioratize</div>
            </div>
          </div>
          <hr style={{ height: '1px', backgroundColor: 'slategray', border: 'none' }} className='w-12' />

          <div className='flex flex-row gap-3 items-center'>
            <div className='bg-orange-400 px-2 rounded-3xl text-sm'>3</div>
            <div>
              <div className='text-sm font-semibold'>PO 987</div>
              <div className='text-xs text-orange-600 cursor-pointer hover:underline'>Prioratize</div>
            </div>
          </div>
        </div>
      </div>
      
    </Box>
  )
}

export default OptimizeRoutes