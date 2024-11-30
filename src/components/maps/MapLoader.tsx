import { Spinner } from "@nextui-org/react";

const MapLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "centre",
      alignItems: "centre",
      height: "400px",
    }}
  >
    <div className="flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  </div>
);

export default MapLoader;
