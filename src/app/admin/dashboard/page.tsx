import VehicleOverview from "../../../components/admin/dashboard/VehicleOverview";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import OnRouteVehicles from "../../../components/admin/dashboard/ordersTable/OnRouteVehicles";
import { Divider } from "@mui/material";
import DeliveryPerformanceCard from "../../../components/admin/dashboard/DeliveryPerformanceCard";
import DeliveryExceptions from "../../../components/admin/dashboard/DeliveryExceptions";
import OrdersTabs from "../../../components/admin/dashboard/orders/OrdersTabs";
import AuthGuard from "../../../components/common/auth/AuthGurd";
import DataInitializer from "../../../components/admin/dashboard/stats/DataInitializer";
import DashboardSummaryCards from "../../../components/admin/dashboard/stats/DashboardSummaryCards";
import VehicleStatusChart from "../../../components/admin/dashboard/VehicleOverviewCard/VehicleStatusChart";
import OrdersTable from "../../../components/admin/dashboard/stats/OrdersTable";
import FetchLoggedUserData from "../../../components/common/FetchUser";

const Admin = () => {
  const todayOnTheWay: number = 2;
  const todayUnloading: number = 1;
  const todayLoading: number = 1;
  const todayWaiting: number = 2;

  return (
    <>
      <AuthGuard>
        <FetchLoggedUserData />
        <DataInitializer>
          <div className=" ">
            <DashboardSummaryCards />
          </div>

          <div className="flex py-9 px-6 gap-x-8   justify-between">
            <div className="w-2/4 pr-5 bg-white rounded-md pl-5">
              <div className="flex mt-4 flex-row justify-between align-middle ">
                <div className="text-lg">Vehicle Status Overview</div>
                <div>
                  <IconButton aria-label="delete" size="small">
                    <RefreshIcon />
                  </IconButton>
                </div>
              </div>
              <Divider className="mb-4 mt-1" />
              <VehicleStatusChart />
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
              <Divider className="mb-4 mt-1" />

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
                <div className="text-lg">Order Status Distribution</div>
                <div></div>
              </div>
              <Divider className="mb-4 mt-1" />
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
              <Divider className=" mt-2 px-3 mx-5" />
              <OrdersTabs />
            </div>
          </div>

          <div className="flex pb-9 px-6 gap-x-8   justify-between">
            <div className="w-full flex flex-col p-5 bg-white rounded-md">
              <div className="flex flex-row justify-between mb-2 align-middle ">
                <div className="text-lg">Order Details</div>
                <div>
                  <IconButton aria-label="delete" size="small">
                    <RefreshIcon />
                  </IconButton>
                </div>
              </div>
              <Divider className="mb-4 mt-1" />
              <OrdersTable />
            </div>
          </div>
        </DataInitializer>
      </AuthGuard>
    </>
  );
};

export default Admin;
