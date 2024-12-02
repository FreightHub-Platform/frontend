"use client";
import React, { useEffect } from "react";
import { api } from "../../utils/config";

const FetchLoggedUserData = () => {
  useEffect(() => {
    const fetchAndStoreLoggedUserData = async () => {
      const userId = localStorage.getItem("id"); // Get the `id` from localStorage
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const loggedUserData = localStorage.getItem("loggedUserData"); // Check if data exists
      if (loggedUserData) {
        console.log(
          "Logged user data already exists in localStorage:",
          JSON.parse(loggedUserData)
        );
        return;
      }

      const jwtToken = localStorage.getItem("jwt"); // Get the JWT token
      if (!jwtToken) {
        console.error("JWT token not found in localStorage");
        return;
      }

      try {
        // Send plain text body as required by the cURL request
        const response = await api.post(
          "/user/id",
          userId, // Send `userId` as plain text
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwtToken}`, // Add JWT token to headers
            },
          }
        );

        if (response.status === 200) {
          const result = response.data;
          localStorage.setItem("loggedUserData", JSON.stringify(result.data)); // Store response
          console.log("Fetched and stored logged user data:", result.data);
        } else {
          console.error(
            "Failed to fetch logged user data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchAndStoreLoggedUserData();
  }, []);

  return null; // No UI is rendered
};

export default FetchLoggedUserData;
