"use client"

import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';
import * as React from 'react';

const VehicleImages = () => {

  const [open, setOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="grid grid-cols-3 gap-1">
      <div className='relative w-full h-36'>
        <Image 
          src="/images/homefleet.jpg"
          onClick={() => handleOpen('/images/homefleet.jpg')}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
          src="/images/1.jpg"
          onClick={() => handleOpen('/images/1.jpg')}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
          src="/images/2.jpg"
          onClick={() => handleOpen('/images/2.jpg')}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
          src="/images/homefleet.jpg"
          onClick={() => handleOpen('/images/homefleet.jpg')}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
          src="/images/1.jpg"
          onClick={() => handleOpen('/images/1.jpg')}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      
      <ViewPhoto
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc}
      />
    </div>
    
  )
}

export default VehicleImages