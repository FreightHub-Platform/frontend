"use client"

import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';
import * as React from 'react';

const VehicleImages = ({vehicle}) => {

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
        //
          src={vehicle.side1Pic}
          onClick={() => handleOpen(vehicle.side1Pic)}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
        //
          src={vehicle.side2Pic}
          onClick={() => handleOpen(vehicle.side2Pic)}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
        //
          src={vehicle.rearPic}
          onClick={() => handleOpen(vehicle.rearPic)}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
        //
          src={vehicle.frontPic}
          onClick={() => handleOpen(vehicle.frontPic)}
          style={{ cursor: 'pointer' }}
          alt=""
          fill 
        />
      </div>
      <div className='relative w-full h-36'>
        <Image 
        //
          src={vehicle.trailerImage}
          onClick={() => handleOpen(vehicle.trailerImage)}
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