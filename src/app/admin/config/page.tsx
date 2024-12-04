"use client";

import React, { useState, useEffect } from "react";
import { Tooltip, Spinner, Button } from "@nextui-org/react";
import { MdAttachMoney, MdOutlineSettings, MdDriveEta } from "react-icons/md";
import { AiOutlineSave, AiOutlineReload } from "react-icons/ai";
import { api as configApi } from "../../../utils/config";

export default function CostParametersPage() {
  const [dieselPrice, setDieselPrice] = useState<number | null>(null);
  const [fixedCost, setFixedCost] = useState<number | null>(null);
  const [driverWage, setDriverWage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch current parameters
  useEffect(() => {
    const fetchCostParameters = async () => {
      try {
        setLoading(true);
        const jwtToken = localStorage.getItem("jwt");
        const response = await configApi.get("/cost-function/", {
          headers: { Authorization: `Bearer ${jwtToken}` },
        });
        const data = response.data.data;
        setDieselPrice(data.dieselPrice);
        setFixedCost(data.fixedCost);
        setDriverWage(data.driverWage);
      } catch (err: any) {
        console.error("Error fetching parameters:", err);
        setError("Failed to load cost parameters. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCostParameters();
  }, []);

  // Handle form submission
  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await configApi.post(
        "/cost-function/update",
        {
          dieselPrice,
          fixedCost,
          driverWage,
        },
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );

      if (response.data.statusCode === 200) {
        setSuccess("Parameters updated successfully.");
      } else {
        setError(response.data.message || "Failed to update parameters.");
      }
    } catch (err: any) {
      console.error("Error updating parameters:", err);
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col items-center">
      <div className="w-full max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-center text-orange-400 mb-10">
          Cost Parameters Dashboard
        </h1>
        <p className="text-lg text-gray-500 text-center mb-16">
          View and manage the core cost parameters that influence your
          operations.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Spinner size="lg" />
          </div>
        ) : (
          <>
            {/* Dashboard Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Diesel Price */}
              <div className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center">
                <MdAttachMoney className="text-6xl text-green-500 mb-4" />
                <Tooltip content="Cost of diesel per liter">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Diesel Price
                  </h2>
                </Tooltip>
                <input
                  aria-label="Diesel Price"
                  type="number"
                  value={dieselPrice !== null ? dieselPrice.toString() : ""}
                  onChange={(e) => setDieselPrice(Number(e.target.value))}
                  className="text-4xl font-semibold text-gray-700 bg-transparent border-none text-center focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
                />
                <p className="text-sm text-gray-500 mt-2">per liter</p>
              </div>

              {/* Fixed Cost */}
              <div className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center">
                <MdOutlineSettings className="text-6xl text-blue-500 mb-4" />
                <Tooltip content="Fixed operational costs">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Fixed Cost
                  </h2>
                </Tooltip>
                <input
                  aria-label="Fixed Cost"
                  type="number"
                  value={fixedCost !== null ? fixedCost.toString() : ""}
                  onChange={(e) => setFixedCost(Number(e.target.value))}
                  className="text-4xl font-semibold text-gray-700 bg-transparent border-none text-center focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
                />
                <p className="text-sm text-gray-500 mt-2">per operation</p>
              </div>

              {/* Driver Wage */}
              <div className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center">
                <MdDriveEta className="text-6xl text-yellow-500 mb-4" />
                <Tooltip content="Driver wage per hour">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Driver Wage
                  </h2>
                </Tooltip>
                <input
                  aria-label="Driver Wage"
                  type="number"
                  value={driverWage !== null ? driverWage.toString() : ""}
                  onChange={(e) => setDriverWage(Number(e.target.value))}
                  className="text-4xl font-semibold text-gray-700 bg-transparent border-none text-center focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
                />
                <p className="text-sm text-gray-500 mt-2">per hour</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-8">
              <Button
                color="danger"
                variant="flat"
                isDisabled={saving}
                onPress={() => {
                  setDieselPrice(null);
                  setFixedCost(null);
                  setDriverWage(null);
                }}
                className="px-8 py-3"
              >
                <AiOutlineReload className="mr-2 text-lg" />
                Reset
              </Button>
              <Button
                color="primary"
                isDisabled={
                  saving ||
                  dieselPrice === null ||
                  fixedCost === null ||
                  driverWage === null
                }
                isLoading={saving}
                onPress={handleSave}
                className="px-8 py-3"
              >
                <AiOutlineSave className="mr-2 text-lg" />
                Save Changes
              </Button>
            </div>

            {error && (
              <p className="text-red-500 text-center mt-6 text-lg font-medium">
                {error}
              </p>
            )}
            {success && (
              <p className="text-orange-400 text-center mt-6 text-lg font-medium">
                {success}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
