import type { Metadata } from "next";
import { Topbar } from "../../../components/reports/topbar/Topbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import SummaryCardSmall from "../../../components/admin/dashboard/SummaryCardSmall";
import OrderVolumeByMonth from "../../../components/reports/OrderVolumeByMonth";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import SingleStackedBarChart from "../../../components/admin/dashboard/VehicleOverviewCard/SingleStackedBarChart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import PublishIcon from "@mui/icons-material/Publish";
import DownloadIcon from "@mui/icons-material/Download";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Divider } from "@mui/material";
import DeliveryPerformanceCard from "../../../components/admin/dashboard/DeliveryPerformanceCard";
import DeliveryExceptions from "../../../components/admin/dashboard/DeliveryExceptions";

const Admin = () => {

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto p-6">
                    <h1 className="text-2xl font-bold mb-6">Analytics</h1>

                    
                    <div className="flex py-9 gap-x-8 justify-between">
                        <div className="w-1/2 bg-white rounded-md p-5">
                            <div className="flex flex-row justify-between mb-3 align-middle">
                                <div className="text-lg">Order Volume by Month</div>
                            </div>
                            <Divider className="mb-4 mt-1"/>
                            <OrderVolumeByMonth />
                        </div>

                        <div className="w-1/2 bg-white rounded-md p-5">
                            <div className="flex flex-row justify-between mb-3 align-middle">
                                <div className="text-lg">Average Delivery Time</div>
                            </div>
                            <Divider className="mb-4 mt-1"/>
                            <OrderVolumeByMonth />
                        </div>
                    </div>

                    <div className="flex py-9 gap-x-8 justify-between">
                        <div className="w-1/2 bg-white rounded-md p-5">
                            <div className="flex flex-row justify-between mb-3 align-middle">
                                <div className="text-lg">Customer Retention rate</div>
                            </div>
                            <Divider className="mb-4 mt-1"/>
                            <OrderVolumeByMonth />
                        </div>

                        <div className="w-1/2 bg-white rounded-md p-5">
                            <div className="flex flex-row justify-between mb-3 align-middle">
                                <div className="text-lg">Carrier Retention Rate</div>
                            </div>
                            <Divider className="mb-4 mt-1"/>
                            <OrderVolumeByMonth />
                        </div>
                    </div>

                    <div className="flex pb-9 gap-x-8 justify-between">
                        <div className="w-1/3 bg-white rounded-md p-5">
                            <div className="flex flex-row justify-between mb-3 align-middle">
                                <div className="text-lg">Most Valuable Customers</div>
                            </div>
                            <Divider className="mb-4 mt-1" />
                            <div className="flex w-full justify-center content-center h-full align-middle mx-auto">
                                <DeliveryExceptions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
