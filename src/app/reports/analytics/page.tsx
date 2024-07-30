import React from 'react';
import MostValuableCustomersChart from "../../../components/reports/mostValuableCustomerChart";
import CustomerRetentionChart from "../../../components/reports/customerRetentionChart";
import CarrierRetentionChart from "../../../components/reports/carrierRetentionChart";

const AnalyticsPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 shadow-md rounded-md">
                    <MostValuableCustomersChart />
                </div>
                <div className="bg-white p-4 shadow-md rounded-md">
                    <CustomerRetentionChart />
                </div>
                <div className="bg-white p-4 shadow-md rounded-md">
                    <CarrierRetentionChart />
                </div>
            </div>
        </div>
    );
};


export default AnalyticsPage;
