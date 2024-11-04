import DriverTable from "./table/DriverTable"

const Drivers = ({onViewMore}) => {
  return(
    <div className="flex w-11/12">
      <DriverTable onViewMore={onViewMore}/>
    </div>
  )
}

export default Drivers