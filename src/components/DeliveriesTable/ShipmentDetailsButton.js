import { Link } from "react-router-dom";
import styled from "styled-components";
import detailsIcon from "../../assets/view_sidebar.png";

const StyledDetailsButton = styled(Link)`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  color: inherit;
  display: inline-flex;
  font-weight: 500;
  gap: 0.625rem;
  line-height: 1.5rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
`;

const ShipmentDetailsButton = ({ orderId, text = "Details" }) => {
  return (
    <StyledDetailsButton to={`/shipment/${orderId}`}>
      <span>{text}</span>
      <img alt="" src={detailsIcon} />
    </StyledDetailsButton>
  );
};

export { ShipmentDetailsButton };
