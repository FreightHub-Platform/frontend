"use client"

import * as React from 'react';

import NICDetals from './NICDeatails';
import DrivingLicense from './DrivingLicense';

const Details = () => {

  
  return(
    <div>
      <table className="table-fixed w-full">
        <tbody>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">First Name</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Last Name</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Email</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Address</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">ZIP Code</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Province</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Driving License</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">NIC</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
        </tbody>
      </table>
      <NICDetals />
      <DrivingLicense />
    </div>
  )
}

export default Details