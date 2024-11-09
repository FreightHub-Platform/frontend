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
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">First Name</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Last Name</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Email</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Contact Number</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Address</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">ZIP Code</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">City</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Province</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Driving License Number</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Driving License Expire Date</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">NIC</td>
          <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
        </tr>
        </tbody>
      </table>
      <NICDetals />
      <DrivingLicense />
    </div>
  )
}

export default Details