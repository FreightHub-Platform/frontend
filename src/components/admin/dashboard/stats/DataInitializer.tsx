"use client";
import React, { useEffect, useState } from "react";
import { api } from "../../../../utils/config";
import { Spinner } from "@nextui-org/react";

const DataInitializer = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch and update data in the background
  const fetchDataInBackground = async () => {
    try {
      const jwtToken = localStorage.getItem("jwt");

      // Fetch data in background
      const [vehiclesRes, driversRes, usersRes, ordersRes, purchaseOrdersRes] =
        await Promise.all([
          api.get("/vehicle/", {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }),
          api.get("/driver/", {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }),
          api.get("/user/all", {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }),
          api.get("/orders/all", {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }),
          api.get("/purchase-order/", {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }),
        ]);

      // Update local storage
      localStorage.setItem(
        "vehiclesData",
        JSON.stringify(vehiclesRes.data.data)
      );
      localStorage.setItem("driversData", JSON.stringify(driversRes.data.data));
      localStorage.setItem("usersData", JSON.stringify(usersRes.data.data));
      localStorage.setItem("ordersData", JSON.stringify(ordersRes.data.data));
      localStorage.setItem(
        "purchaseOrdersData",
        JSON.stringify(purchaseOrdersRes.data.data)
      );
    } catch (err) {
      console.error("Error fetching data in background:", err);
    }
  };

  // Function to fetch data in the foreground if not available in local storage
  const fetchDataIfMissing = async () => {
    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("jwt");

      const fetchPromises = [];

      // Check and fetch each dataset if missing in local storage
      if (!localStorage.getItem("vehiclesData")) {
        fetchPromises.push(
          api
            .get("/vehicle/", {
              headers: { Authorization: `Bearer ${jwtToken}` },
            })
            .then((res) =>
              localStorage.setItem(
                "vehiclesData",
                JSON.stringify(res.data.data)
              )
            )
        );
      }
      if (!localStorage.getItem("driversData")) {
        fetchPromises.push(
          api
            .get("/driver/", {
              headers: { Authorization: `Bearer ${jwtToken}` },
            })
            .then((res) =>
              localStorage.setItem("driversData", JSON.stringify(res.data.data))
            )
        );
      }
      if (!localStorage.getItem("usersData")) {
        fetchPromises.push(
          api
            .get("/user/all", {
              headers: { Authorization: `Bearer ${jwtToken}` },
            })
            .then((res) =>
              localStorage.setItem("usersData", JSON.stringify(res.data.data))
            )
        );
      }
      if (!localStorage.getItem("ordersData")) {
        fetchPromises.push(
          api
            .get("/orders/all", {
              headers: { Authorization: `Bearer ${jwtToken}` },
            })
            .then((res) =>
              localStorage.setItem("ordersData", JSON.stringify(res.data.data))
            )
        );
      }
      if (!localStorage.getItem("purchaseOrdersData")) {
        fetchPromises.push(
          api
            .get("/purchase-order/", {
              headers: { Authorization: `Bearer ${jwtToken}` },
            })
            .then((res) =>
              localStorage.setItem(
                "purchaseOrdersData",
                JSON.stringify(res.data.data)
              )
            )
        );
      }

      // Wait for all foreground requests to complete
      await Promise.all(fetchPromises);

      setError(null); // Clear errors if data fetch is successful
    } catch (err) {
      console.error("Error fetching data in the foreground:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if data exists in local storage
    const hasVehiclesData = !!localStorage.getItem("vehiclesData");
    const hasDriversData = !!localStorage.getItem("driversData");
    const hasUsersData = !!localStorage.getItem("usersData");
    const hasOrdersData = !!localStorage.getItem("ordersData");
    const hasPurchaseOrdersData = !!localStorage.getItem("purchaseOrdersData");

    // Fetch data in the foreground if missing, and in the background otherwise
    if (
      hasVehiclesData &&
      hasDriversData &&
      hasUsersData &&
      hasOrdersData &&
      hasPurchaseOrdersData
    ) {
      setLoading(false); // Render the children immediately
      fetchDataInBackground(); // Update the data in the background
    } else {
      fetchDataIfMissing(); // Fetch data in the foreground if missing
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <p>Loading data...</p>
          <Spinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render children after data is loaded
  return <>{children}</>;
};

export default DataInitializer;
