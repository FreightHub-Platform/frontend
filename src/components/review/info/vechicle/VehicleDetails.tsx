import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const VehicleDetails = () => {

  const flag = false

  return(
    <div className="grid grid-cols-2 gap-3">
      <div>
      <table className="table-fixed w-full">
        <tbody>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Vehicle Type</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Vehicle Registration</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">License Plate No</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Make</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Model</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
        </tbody>
      </table>
      </div>
      <div>
      <table className="table-fixed w-full">
        <tbody>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Year Of Manufacture</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Is Regidgerated</td>
            <td className="p-1 border-2 flex-grow"><div className={flag ? 'text-green-600' : 'text-red-600'}>{flag ? <CheckIcon /> : <CloseIcon />}</div></td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Has Crane</td>
            <td className="p-1 border-2 flex-grow"><div className={flag ? 'text-green-600' : 'text-red-600'}>{flag ? <CheckIcon /> : <CloseIcon />}</div></td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Vehicle Color</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default VehicleDetails