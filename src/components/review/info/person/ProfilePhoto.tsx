"use client"

import * as React from 'react';
import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';

const ProfilePhoto = () => {
  const [open, setOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Image 
        src="/images/1.jpg"
        width={400}
        height={400}
        onClick={() => handleOpen('/images/1.jpg')}
        style={{ cursor: 'pointer' }}
        alt="" 
      />

      <ViewPhoto
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default ProfilePhoto;
