import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ItemCard from './itemCard/ItemCard';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import ItemForm from './itemForm/ItemForm';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '16px',
  width: 1100,
};

const AddItem = ({ order, orderIndex, updateOrderItems, cancelOrder }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allowSharing, setAllowSharing] = useState(order.allow_shearing)

  const [items, setItems] = useState(order.items || []);


  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    updateOrderItems(orderIndex, updatedItems);
    handleClose();
  }

  const handleCancelItems = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    updateOrderItems(orderIndex, updatedItems);
  }



  return (
    <Box component="section" className='px-5 py-2 mb-2 shadow-lg rounded-lg border-orange-500 border-1 rounded-md flex flex-col'>
      <div className='flex flex-row justify-between items-center'>
        <div className='bg-zinc-300 px-4 py-1 rounded-3xl font-semibold text-xs'>PO {order.poNumber}</div>
        <div>
          <FormControlLabel 
            control={<Checkbox className='text-sm' defaultChecked={order.ltlFlag} onClick={() => setAllowSharing(!allowSharing)}/>} 
            label={
              <Typography className='text-sm'>
                Allow Load Sharing
              </Typography>
            }
          />
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex items-center'>
          <p className='font-semibold mr-1 text-xs'>Drop-Off Location:</p>
          <p className='text-xs'>{order.storeName}</p>
        </div>
        <div className='flex items-center mb-1'>
          <p className='font-semibold mr-1 text-xs'>Drop-Off Date:</p>
          <p className='text-xs'>{order.dropDate}</p>
        </div>
      </div>

      <div>
        <button className='bg-primary py-1 px-8 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={handleOpen}>+ Add an Item</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ItemForm addItems={addItem} />
          </Box>
        </Modal>
      </div>

      <div>  
        <ItemCard newItem={items} cancelItem={handleCancelItems}/> 
      </div>

      <div className='flex flex-row justify-end'>
        <button className='bg-primary py-1 px-10 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={cancelOrder}>Cancel</button>
      </div>
    </Box>
  )
}

export default AddItem;
