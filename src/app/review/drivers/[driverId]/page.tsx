import ProfilePhoto from "../../../../components/review/info/person/ProfilePhoto"
import Details from "../../../../components/review/info/person/Details"
import BankDetails from "../../../../components/review/info/person/BankDetails"
import VehicleDetails from "../../../../components/review/info/vechicle/VehicleDetails"
import VehicleDocument from "../../../../components/review/info/vechicle/VehicleDocument"
import VehicleImages from "../../../../components/review/info/vechicle/VehicleImages"

const ProfileDetails = () => {
  return(
    <div className="flex justify-center w-11/12 mb-3">
      <div className="grid grid-cols-[400px_1fr] gap-3">
        <div className="gap-2 bg-white p-3 ">
          <div>
            <div className="p-1 bg-orange-300 w-full flex justify-center mb-3">Driver Details</div>
            <ProfilePhoto />
          </div>
          <div className="mt-2">
            <Details />
          </div>  
          <div>
            <BankDetails />
          </div> 
          <div className="flex justify-center">
            <button className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Driver</button>
          </div>
          
        </div>
        <div className="bg-white p-3">
          <div className="p-1 bg-orange-300 w-full flex justify-center mb-2">Vehicle Details</div>
          <div><VehicleDetails /></div>
          <div className="p-1 bg-orange-300 w-full flex justify-center mb-2 mt-4">Vehicle Images</div>
          <div><VehicleImages /></div>  
          <div className="p-1 bg-orange-300 w-full flex justify-center mb-2 mt-4">Vehicle Documents</div>
          <div><VehicleDocument /></div> 

          <div className="flex justify-center items-center h-48">
            <button className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white">Verify Vehicle</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails