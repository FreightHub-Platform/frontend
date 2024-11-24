"use client";

import React, { useEffect, useState } from "react";
import CommonSummaryCardSmall from "../../common/card/CommonSummaryCardSmall";
import { userApi } from "../../../utils/config";

type UserSummary = {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  pendingUsers: number;
  date: string;
};

export default function UserSummaryCards() {
  const [summaryData, setSummaryData] = useState<UserSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        setLoading(true);
        const jwtToken = localStorage.getItem("jwt");
        const response = await userApi.get("/getUsersSummary", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setSummaryData(response.data.data[0]);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching summary data:", err);
        setError(
          err.response?.data?.message || "Failed to fetch user summary."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  // Placeholder content during loading or error
  if (loading) {
    return <p>Loading user summary...</p>;
  }

  if (error || !summaryData) {
    return <p className="text-red-500">{error || "No data available."}</p>;
  }

  // New Idea for the "Last 30 days" Line
  const subtitleSuggestion = `Total users: ${
    summaryData.totalUsers
  }, Active percentage: ${
    ((summaryData.activeUsers / summaryData.totalUsers) * 100).toFixed(1) || 0
  }%`;

  return (
    <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
      <CommonSummaryCardSmall
        borderColor="#4e46e590"
        hoverBorderColor="#4e46e5"
        Title="Active users"
        Subtitle={subtitleSuggestion}
        UpdatedDate={new Date(summaryData.date).toLocaleDateString()}
        Quantity={summaryData.activeUsers}
        imageURL="placeholder.png"
      />
      <CommonSummaryCardSmall
        borderColor="#06ce6390"
        hoverBorderColor="#04a152"
        Title="Pending users"
        Subtitle="Pending user activations"
        UpdatedDate={new Date(summaryData.date).toLocaleDateString()}
        Quantity={summaryData.pendingUsers}
        imageURL="placeholder.png"
      />
      <CommonSummaryCardSmall
        borderColor="#d148ec90"
        hoverBorderColor="#cf34d4"
        Title="Inactive users"
        Subtitle="Users not active recently"
        UpdatedDate={new Date(summaryData.date).toLocaleDateString()}
        Quantity={summaryData.inactiveUsers}
        imageURL="placeholder.png"
      />
      <CommonSummaryCardSmall
        borderColor="#ffa50090"
        hoverBorderColor="#ffa500"
        Title="Total Users"
        Subtitle="Overall users in the system"
        UpdatedDate={new Date(summaryData.date).toLocaleDateString()}
        Quantity={summaryData.totalUsers}
        imageURL="placeholder.png"
      />
    </div>
  );
}
