"use client"

import * as React from 'react';

import NICDetals from './NICDeatails';
import DrivingLicense from './DrivingLicense';

const Details = () => {

  
  return(
    <div>
      <table className="table-fixed w-full text-sm">
        <tbody>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">First Name</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Last Name</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Email</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Contact Number</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Address</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">ZIP Code</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">City</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Province</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Driving License Number</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Driving License Expire Date</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">NIC</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
        </tbody>
      </table>
      <NICDetals />
      <DrivingLicense />
    </div>
  )
}

export default Details