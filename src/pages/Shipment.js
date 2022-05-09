import { useParams } from "react-router-dom";
import { StyledPage } from "../components/StyledPage";
import { StyledTitle } from "../components/StyledTitle";

const Shipment = () => {
  const { orderId } = useParams();
  return (
    <StyledPage>
      <StyledTitle>Shipment Order: {orderId}</StyledTitle>
    </StyledPage>
  );
};

export { Shipment };
