import Typography from "@mui/material/Typography";
import SummaryCardSmall from "../../../components/admin/dashboard/SummaryCardSmall";
import VehicleOverview from "../../../components/admin/dashboard/VehicleOverview";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import OnRouteVehicles from "../../../components/admin/dashboard/ordersTable/OnRouteVehicles";
const Admin = () => {
  return (
    <>
      <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
        <SummaryCardSmall borderColor="#4e46e590" hoverBorderColor="#4e46e5" />
        <SummaryCardSmall borderColor="#06ce6390" hoverBorderColor="#04a152" />
        <SummaryCardSmall borderColor="#d148ec90" hoverBorderColor="#cf34d4" />
        <SummaryCardSmall borderColor="#e5464e90" hoverBorderColor="#c53030" />
      </div>

      <div className="flex py-9 px-6 gap-x-8   justify-between">
        <div className="w-2/4 pr-5 bg-white rounded-md"></div>
        <div className="w-2/4 pr-5 bg-white rounded-md">
          <VehicleOverview />
        </div>
      </div>

      <div className="flex pb-9 h-96 px-6 gap-x-8   justify-between">
        <div className=" w-2/6 bg-white rounded-md">dasda</div>
        <div className=" w-2/6 bg-white rounded-md">asd</div>
        <div className=" w-2/6 bg-white rounded-md">dadas</div>
      </div>

      <div className="flex pb-9 px-6 gap-x-8   justify-between">
        <div className="w-full flex flex-col p-5 bg-white rounded-md">
          <div className="flex flex-row justify-between mb-5 align-middle ">
            <div className="text-lg">On Route Vehicles</div>
            <div>
              <IconButton aria-label="delete" size="small">
                <RefreshIcon />
              </IconButton>
            </div>
          </div>
          <OnRouteVehicles />
        </div>
      </div>
    </>
  );
};

export default Admin;
