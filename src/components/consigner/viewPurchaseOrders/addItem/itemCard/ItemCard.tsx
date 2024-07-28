import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

const ItemCard = ({newItem, cancelItem}) => {
  return (
    <Box component="section" className='flex flex-row gap-5 overflow-x-auto my-2'>
      {newItem.map((item, index) => (
        <div className='flex flex-col gap-1 pt-3 pb-2 pr-8 pl-3 bg-yellow-200 rounded-lg relative cursor-pointer' onClick={() => cancelItem(index)}>
        <CloseIcon className='absolute top-1.5 right-1.5 text-base'/>
        <div className='flex'>
          <p className='font-semibold mr-1 text-sm'>Type:</p>
          <p className='text-sm'>{item.type}</p>
        </div>
        <div className='flex'>
          <p className='font-semibold mr-1 text-sm'>Weight:</p>
          <p className='text-sm'>{item.weight}kg</p>
        </div>
        <div className='flex'>
          <p className='font-semibold mr-1 text-sm'>CBM:</p>
          <p className='text-sm'>{item.cbm}</p>
        </div>
      </div> 
      ))}
    </Box>
  )
}

export default ItemCard