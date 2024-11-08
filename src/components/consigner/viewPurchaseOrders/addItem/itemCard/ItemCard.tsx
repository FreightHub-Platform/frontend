import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css';

const ItemCard = ({newItem, cancelItem}) => {
  return (
    <Box component="section" className='flex flex-row gap-3 overflow-x-auto py-2 mb-1 custom-scrollbar'>
      {newItem.map((item, index) => (
        <div className='flex flex-col pt-3 pb-2 pr-8 pl-3 bg-yellow-200 rounded-lg relative cursor-pointer' key={index} onClick={() => cancelItem(index)}>
        <CloseIcon className='absolute top-1.5 right-1.5 text-sm'/>
        <div className='flex'>
          <p className='font-semibold mr-1 text-xs'>Type:</p>
          <p className='text-xs'>{item.iTypeId.split(",")[1]}</p>
        </div>
        <div className='flex'>
          <p className='font-semibold mr-1 text-xs'>Weight:</p>
          <p className='text-xs'>{item.weight}kg</p>
        </div>
        <div className='flex'>
          <p className='font-semibold mr-1 text-xs'>CBM:</p>
          <p className='text-xs'>{item.cbm}</p>
        </div>
      </div> 
      ))}
    </Box>
  )
}

export default ItemCard