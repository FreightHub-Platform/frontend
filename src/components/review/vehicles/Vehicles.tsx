import VehicleTable from "./table/VehicleTable"


const Vehicles = ({onViewMore}) => {
  return(
    <div className="flex w-11/12">
      <VehicleTable onViewMore={onViewMore}/>
    </div> 
  )
}

export default Vehicles