const BankDetails = () => {
  return(
    <div className="flex flex-col w-full items-center gap-1 mt-3">
        <div className="p-1 bg-orange-300 w-full flex justify-center rounded-lg">Bank Details</div>
        <table className="table-fixed w-full text-sm">
        <tbody>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Account Holder</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Bank Name</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="bg-orange-400 w-32 p-1 flex items-center rounded-l-lg ps-4">Branch</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default BankDetails