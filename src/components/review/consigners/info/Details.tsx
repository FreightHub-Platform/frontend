import Image from "next/image"


const Details = () => {
  return(
    <div>
      <table className="table-fixed w-full">
        <tbody className="text-sm">
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Business Name</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Business Registration Number</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Email</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Main Contact Number</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Alternative Contact Number</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Address Line 1</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Address Line 2</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">City</td>
            <td className="p-1 border-2 flex-grow flex items-center">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Province</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1">Postal Code</td>
            <td className="p-1 border-2 flex-grow">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center">Document</td>
            <td className="p-1 border-2 flex-grow">
              <a href={'/pdf/1.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image
                  src="/images/pdf.svg" 
                  alt="Description of the SVG"
                  width={30} 
                  height={30}
                />
                1.pdf
              </a> 
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Details