import { Route, Routes } from "react-router-dom";
import { StyledPage } from "../components/StyledPage";
import { Deliveries } from "./Deliveries";
import { NotFound } from "./NotFound";
import { Root } from "./Root";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<StyledPage />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Pages };
