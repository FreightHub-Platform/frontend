import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const VehicleDetails = ({vehicle}) => {



  return(
    <div className="grid grid-cols-2 gap-3">
      <div>
      <table className="table-fixed w-full text-sm">
      <tbody>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Vehicle Type</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.vtypeId ? vehicle.vtypeId.type : ""}</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Vehicle Registration</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.licenseNo}</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">License Plate No</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.licenseNo}</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Make</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.make}</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Model</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.model}</td> 
        </tr>
      </tbody>

      </table>
      </div>
      <div>
      <table className="table-fixed w-full text-sm">
      <tbody>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Year Of Manufacture</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.year}</td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Is Regidgerated</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">
          
            <div className={vehicle.refrigFlag ? 'text-green-600' : 'text-red-600'}>
              {vehicle.refrigFlag ? <CheckIcon /> : <CloseIcon />}
            </div>
          </td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Has Crane</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">
          
            <div className={vehicle.craneFlag ? 'text-green-600' : 'text-red-600'}>
              {vehicle.craneFlag ? <CheckIcon /> : <CloseIcon />}
            </div>
          </td> 
        </tr>
        <tr className="flex mb-1">
          <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Vehicle Color</td>
          <td className="p-1 border-2 flex-grow flex items-center rounded-r-lg ps-3">{vehicle.color}</td> 
        </tr>
      </tbody>

      </table>
      </div>
    </div>
  )
}

export default VehicleDetails