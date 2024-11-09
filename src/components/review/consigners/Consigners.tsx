import ConsignerTable from "./table/ConsignerTable";

const Consigners = ({onViewMore}) => {
    return(
      <div className="flex h-full w-11/12">
        <ConsignerTable onViewMore={onViewMore}/>
      </div>
    )
};

export default Consigners;