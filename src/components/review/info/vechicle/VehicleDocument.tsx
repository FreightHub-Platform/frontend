"use client"

import * as React from 'react';
import Image from 'next/image';
import ViewPhoto from '../ViewPhoto';

const VehicleDocument = () => {

  const [open, setOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return(
    <>
      <div className="py-1 flex justify-center rounded-xl bg-orange-300 mb-1 mt-3 w-1/3">Vehicle revenue license</div>
      <table className="table-fixed w-full text-sm">
        <tbody>
          <tr className="flex mb-1">
            <td className="border-2 border-orange-300 w-32 p-1 rounded-l-lg ps-4 flex items-center">Expire date</td>
            <td className="p-1 border-2 flex-grow rounded-r-lg ps-5 items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="border-2 border-orange-300 w-32 rounded-l-lg p-1 flex justify-center items-center">Image</td>
            <td className="p-1 border-2 flex justify-center ps-3">
              <Image 
                src="/images/homefleet.jpg"
                onClick={() => handleOpen('/images/homefleet.jpg')}
                width={400}
                height={400}
                style={{ cursor: 'pointer' }}
                alt=""
              />
            </td> 
          </tr>
        </tbody>
      </table>

      <div className="py-1 flex justify-center rounded-xl bg-orange-300 mb-1 mt-3 w-1/3">Vehicle insurance</div>
      <table className="table-fixed w-full text-sm">
        <tbody>
          <tr className="flex mb-1">
            <td className="border-2 border-orange-300 w-32 p-1 rounded-l-lg ps-4 flex items-center">Expire date</td>
            <td className="p-1 border-2 flex-grow rounded-r-lg ps-5 items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="border-2 border-orange-300 w-32 p-1 rounded-l-lg flex justify-center items-center">Image</td>
            <td className="p-1 border-2 flex justify-center ps-3">
              <Image 
                src="/images/homefleet.jpg"
                onClick={() => handleOpen('/images/homefleet.jpg')}
                width={400}
                height={400}
                style={{ cursor: 'pointer' }}
                alt=""
              />
            </td> 
          </tr>
        </tbody>
      </table>

      <div className="py-1 flex justify-center rounded-xl bg-orange-300 mb-1 mt-3 w-1/3">Vehicle registration document</div>
      <div className='mt-2 ms-5'>
        <a href={'/pdf/1.pdf'} target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/pdf.svg" 
            alt="Description of the SVG"
            width={50} // Specify your desired width
            height={50} // Specify your desired height
          />
          <div className='text-sm ms-2'>
            1.pdf
          </div>
        </a>
      </div>
      
      <ViewPhoto
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc}
      />
    </>
  )
}

export default VehicleDocument