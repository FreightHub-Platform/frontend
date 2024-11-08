const BankDetails = () => {
  return(
    <div className="flex flex-col w-full items-center gap-1 mt-3">
        <div className="p-1 border-3 w-full flex justify-center rounded-lg font-bold" style={{ borderColor: '#FF9800'}}>Bank Details</div>
        <table className="table-fixed w-full text-sm">
        <tbody>
          <tr className="flex mb-1">
            <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Account Holder</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Bank Name</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
          <tr className="flex mb-1">
            <td className="w-32 p-1 flex items-center rounded-l-lg ps-4 border-2 border-orange-300">Branch</td>
            <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default BankDetails