import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Button } from "@nextui-org/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { orderApi } from "../../../utils/config";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  overflowY: "auto",
  maxHeight: "90vh",
};

type Route = {
  routeId: number;
  status: string;
  cost: number;
  vehicleId: {
    id: number;
    licenseNo: string;
    model: string;
    make: string;
    vtypeId: {
      type: string;
      length: number;
      height: number;
      width: number;
      maxCapacity: number;
      maxWeight: number;
    };
  };
  purchaseOrderDtos: PurchaseOrder[];
};

type PurchaseOrder = {
  id: number;
  poNumber: string;
  storeName: string;
  dropDate: string;
  dropTime: string;
  contactNumber: string;
  email: string;
  status: string;
  address: string;
  otp: number;
  items: {
    id: number;
    itemName: string;
    weight: number;
    cbm: number;
  }[];
};

interface OrderDetailsModalProps {
  orderId: number | null;
  open: boolean;
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  orderId,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (orderId && open) {
      const fetchOrderDetails = async () => {
        try {
          setLoading(true);
          setError(null);

          const jwtToken = localStorage.getItem("jwt");
          const response = await orderApi.post(
            "/view-order",
            { id: orderId },
            {
              headers: { Authorization: `Bearer ${jwtToken}` },
            }
          );

          setRoutes(response.data.data || []);
        } catch (err: any) {
          console.error("Error fetching order details:", err);
          setError("Failed to load order details. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchOrderDetails();
    }
  }, [orderId, open]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" mb={2}>
          Order Details for Order #{orderId}
        </Typography>

        {loading ? (
          <Box className="flex justify-center items-center py-4">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          routes.map((route, index) => (
            <div
              key={route.routeId}
              className="border border-gray-300 rounded-lg mb-4"
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <div className="flex justify-between items-center w-full">
                    <Typography variant="subtitle1" className="font-bold">
                      Route {index + 1}
                    </Typography>
                    <Chip label={route.status} color="primary" size="small" />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <LocalShippingIcon
                        style={{ marginRight: "8px", color: "gray" }}
                      />
                      <Typography>
                        Vehicle Info (License:{" "}
                        {route.vehicleId ? route.vehicleId.licenseNo : "N/A"})
                      </Typography>
                    </div>
                    <Typography>
                      <strong>Model:</strong>{" "}
                      {route.vehicleId ? route.vehicleId.model : "N/A"}
                    </Typography>

                    <Typography>
                      <strong>Type:</strong>{" "}
                      {route.vehicleId?.vtypeId?.type || "N/A"}
                    </Typography>

                    <Typography>
                      <strong>Dimensions:</strong>
                      {route.vehicleId?.vtypeId
                        ? `${route.vehicleId.vtypeId.length} x ${route.vehicleId.vtypeId.width} x ${route.vehicleId.vtypeId.height} ft`
                        : "N/A"}
                    </Typography>

                    {route.purchaseOrderDtos.map((po) => (
                      <Accordion
                        key={po.id}
                        className="border-t border-gray-300 mt-2"
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`po-panel${po.id}-content`}
                          id={`po-panel${po.id}-header`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center space-x-4">
                              <Typography
                                variant="subtitle1"
                                className="font-bold"
                              >
                                Store: {po.storeName}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="text-gray-600"
                              >
                                Order #{po.poNumber}
                              </Typography>
                            </div>
                            <Chip
                              label={po.status}
                              color="success"
                              size="small"
                            />
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Typography>
                                <strong>Drop Date:</strong> {po.dropDate}
                              </Typography>
                              <Typography>
                                <strong>Drop Time:</strong> {po.dropTime}
                              </Typography>
                              <Typography>
                                <strong>Address:</strong> {po.address}
                              </Typography>
                            </div>
                            <div>
                              <Typography>
                                <strong>Contact:</strong> {po.contactNumber}
                              </Typography>
                              <Typography>
                                <strong>Email:</strong> {po.email}
                              </Typography>
                              {/* <Typography>
                                <strong>OTP:</strong> {po.otp}
                              </Typography> */}
                            </div>
                          </div>
                          <Typography
                            variant="subtitle2"
                            className="font-bold mt-4"
                          >
                            Items:
                          </Typography>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {po.items.map((item) => (
                              <div
                                key={item.id}
                                className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-sm"
                              >
                                <Typography
                                  variant="body1"
                                  className="font-semibold mb-2"
                                >
                                  {item.itemName}
                                </Typography>
                                <div className="flex justify-between">
                                  <Typography
                                    variant="body2"
                                    className="text-gray-600"
                                  >
                                    <strong>Weight:</strong> {item.weight} kg
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    className="text-gray-600"
                                  >
                                    <strong>CBM:</strong> {item.cbm}
                                  </Typography>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))
        )}

        <Button
          className="mt-4 w-full"
          color="primary"
          variant="bordered"
          onPress={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderDetailsModal;
