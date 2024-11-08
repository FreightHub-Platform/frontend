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
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">First Name</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Last Name</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Email</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Contact Number</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Address</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">ZIP Code</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">City</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Province</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Driving License Number</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Driving License Expire Date</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">NIC</td>
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