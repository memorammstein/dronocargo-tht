import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { StyledPage } from "../components/StyledPage";
import { Deliveries } from "./Deliveries";
import { NotFound } from "./NotFound";
import { Root } from "./Root";
import { Shipment } from "./Shipment";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<StyledPage />} />
        <Route path="deliveries" element={<ProtectedRoute><Deliveries /></ProtectedRoute>} />
        <Route path="shipment/:orderId" element={<Shipment />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Pages };
