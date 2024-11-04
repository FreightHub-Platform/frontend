import ConsignerTable from "./table/ConsignerTable";

const Consigners = ({onViewMore}) => {
    return(
      <div className="flex w-11/12">
        <ConsignerTable onViewMore={onViewMore}/>
      </div>
    )
};

export default Consigners;