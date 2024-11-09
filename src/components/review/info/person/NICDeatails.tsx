import * as React from 'react';
import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';

const NICDetails = () => {

  const [open, setOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);


  return(
    <div className="flex flex-col w-full items-center gap-1 mt-3">
        <div className="p-1 border-3 w-full flex justify-center rounded-lg font-bold" style={{ borderColor: '#FF9800'}}>NIC Front and Back</div>
        <div>
          <Image 
            src="/images/homefleet.jpg"
            width={400}
            height={400}
            onClick={() => handleOpen('/images/homefleet.jpg')}
            style={{ cursor: 'pointer' }}
            alt="" 
          />
        </div>
        <div>
          <Image 
            src="/images/2.jpg"
            width={400}
            height={400}
            onClick={() => handleOpen('/images/2.jpg')}
            style={{ cursor: 'pointer' }}
            alt="" 
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

export default NICDetails