"use client"

import * as React from 'react';
import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';

const ProfilePhoto = ({ pic }) => {
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
        src={pic.profilePic} // Use the pic prop for the image source
        width={400}
        height={400}
        onClick={() => handleOpen(pic.profilePic)} // Pass pic to handleOpen
        style={{
          cursor: "pointer",
        }}
        alt="Profile Photo" // Provide a meaningful alt text
      />

      <ViewPhoto
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc} // Dynamically use imgSrc
      />
    </div>
  );
};

export default ProfilePhoto;
