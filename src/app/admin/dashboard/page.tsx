import SummaryCardSmall from "../../../components/admin/dashboard/SummaryCardSmall";
import VehicleOverview from "../../../components/admin/dashboard/VehicleOverview";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import OnRouteVehicles from "../../../components/admin/dashboard/ordersTable/OnRouteVehicles";
import SingleStackedBarChart from "../../../components/admin/dashboard/VehicleOverviewCard/SingleStackedBarChart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import PublishIcon from "@mui/icons-material/Publish";
import DownloadIcon from "@mui/icons-material/Download";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Divider } from "@mui/material";
import DeliveryPerformanceCard from "../../../components/admin/dashboard/DeliveryPerformanceCard";
import DeliveryExceptions from "../../../components/admin/dashboard/DeliveryExceptions";
import OrdersTabs from "../../../components/admin/dashboard/orders/OrdersTabs";

const Admin = () => {
  const todayOnTheWay: number = 2;
  const todayUnloading: number = 1;
  const todayLoading: number = 1;
  const todayWaiting: number = 2;

  //calculate percentage of

  return (
    <>
      <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
        <SummaryCardSmall borderColor="#4e46e590" hoverBorderColor="#4e46e5" />
        <SummaryCardSmall borderColor="#06ce6390" hoverBorderColor="#04a152" />
        <SummaryCardSmall borderColor="#d148ec90" hoverBorderColor="#cf34d4" />
        <SummaryCardSmall borderColor="#e5464e90" hoverBorderColor="#c53030" />
      </div>

      <div className="flex py-9 px-6 gap-x-8   justify-between">
        <div className="w-2/4 pr-5 bg-white rounded-md pl-5">
          <div className="flex mt-4 flex-row justify-between align-middle ">
            <div className="text-lg">On Route Vehicles</div>
            <div>
              <IconButton aria-label="delete" size="small">
                <RefreshIcon />
              </IconButton>
            </div>
          </div>
          <Divider className="mb-4 mt-1"/>
          <div>
            <SingleStackedBarChart
              onTheWay={todayOnTheWay}
              unloading={todayUnloading}
              loading={todayLoading}
              waiting={todayWaiting}
            />
            <div className="flex flex-col">
              <div className="flex p-2 flex-row justify-between">
                <div className="flex flex-row">
                  <DriveEtaIcon />
                  <div className="ml-3"> On the way</div>
                </div>
                <div> {todayOnTheWay} Hours</div>
                <div> 39.7% </div>
              </div>
              <Divider className="py-2" />
              <div className="flex p-2  flex-row justify-between">
                <div className="flex  p-2flex-row">
                  <DownloadIcon />
                  <div className="ml-3"> Unloading</div>
                </div>
                <div> {todayUnloading} Hours</div>
                <div> 39.7% </div>
              </div>
              <Divider className="py-2" />
              <div className="flex flex-row p-2 justify-between">
                <div className="flex flex-row">
                  <PublishIcon />
                  <div className="ml-3"> Loading</div>
                </div>
                <div> {todayLoading} Hours</div>
                <div> 39.7% </div>
              </div>
              <Divider className="py-2" />
              <div className="flex flex-row p-2 justify-between">
                <div className="flex flex-row">
                  <ScheduleIcon />
                  <div className="ml-3"> Waiting</div>
                </div>
                <div> {todayWaiting} Hours</div>
                <div> 39.7% </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 pr-5 bg-white rounded-md">
          <VehicleOverview />
        </div>
      </div>

      <div className="flex pb-9  px-6 gap-x-8   justify-between">
        <div className=" w-2/6 pb-6 bg-white rounded-md  px-7">
          <div className="flex mt-4 flex-row justify-between mb-3 align-middle">
            <div className="text-lg">Delivery Performance</div>
            <div>
              <IconButton aria-label="delete" size="small">
                <RefreshIcon />
              </IconButton>
            </div>
          </div>
          <Divider className="mb-4 mt-1"/>

          <div className=" flex flex-col gap-y-3">
            <DeliveryPerformanceCard
              icon="gift"
              upordown="up"
              amount="299"
              text="Packages in transit"
              percentage="12%"
              bgColor="bg-green-300"
            />
            <DeliveryPerformanceCard
              icon="gift"
              upordown="up"
              amount="299"
              text="Packages in transit"
              percentage="12%"
              bgColor="bg-green-500"
            />
            <DeliveryPerformanceCard
              icon="gift"
              upordown="down"
              amount="299"
              text="Packages in transit"
              percentage="12%"
              bgColor="bg-green-600"
            />
            <DeliveryPerformanceCard
              icon="gift"
              upordown="up"
              amount="299"
              text="Packages in transit"
              percentage="12%"
              bgColor="bg-green-800"
            />
            <DeliveryPerformanceCard
              icon="gift"
              upordown="down"
              amount="299"
              text="Packages in transit"
              percentage="12%"
              bgColor="bg-green-900"
            />
          </div>
        </div>
        <div className=" w-2/6 bg-white rounded-md p-5">
          <div className="flex flex-row justify-between mb-3 align-middle ">
            <div className="text-lg">Delivery Exceptions</div>
            <div></div>
          </div>
          <Divider className="mb-4 mt-1"/>
          <div className="flex w-full justify-center content-center h-full align-middle  mx-auto">
            <DeliveryExceptions />
          </div>
        </div>
     
        <div className=" w-2/6 bg-white h-[29rem] rounded-md">
          <div className="flex mt-4 flex-row justify-between mb-1 align-middle px-5">
            <div className="text-lg">Orders</div>
            <div>
              <IconButton aria-label="delete" size="small">
                <RefreshIcon />
              </IconButton>
            </div>
          </div>
          <Divider className=" mt-2 px-3 mx-5"/>
          <OrdersTabs />
        </div>
      </div>

      <div className="flex pb-9 px-6 gap-x-8   justify-between">
        <div className="w-full flex flex-col p-5 bg-white rounded-md">
          <div className="flex flex-row justify-between mb-2 align-middle ">
            <div className="text-lg">On Route Vehicles</div>
            <div>
              <IconButton aria-label="delete" size="small">
                <RefreshIcon />
              </IconButton>
            </div>
          </div>
          <Divider className="mb-4 mt-1"/>
          <OnRouteVehicles />
        </div>
      </div>
    </>
  );
};

export default Admin;
