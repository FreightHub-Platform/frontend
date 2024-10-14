import Details from "../../../../components/review/consigners/info/Details"
import Logo from "../../../../components/review/consigners/info/Logo"
import MapView from "../../../../components/review/consigners/info/Map"


const ConsignerDetails = () => {
  return(
    <div className="w-11/12 mb-3">
      <div className="bg-white p-3">
        <div className="p-1 bg-orange-300 w-full flex justify-center mb-3">Vehicle Details</div>
        <div className="flex justify-center items-center"><Logo /></div>
        <div className="grid grid-cols-[400px_1fr] gap-2 mt-3">
          <div><Details /></div>
          <div className="flex justify-center items-center"><MapView /></div>
        </div>
        <div className="flex justify-center">
            <button className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Consigner</button>
          </div>
      </div>
    </div>
  )
}

export default ConsignerDetails