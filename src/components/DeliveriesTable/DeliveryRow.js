import styled from "styled-components";
import { DeliveryActionsDropdown } from "./DeliveryActionsDropdown";
import { ShipmentDetailsButton } from "./ShipmentDetailsButton";

const StyledDeliveriesListTableRow = styled.tr`
  box-shadow: ${props => props.fresh ?
    "inset 0px -2px 0px #307460" :
    "inset 0px -1px 0px rgba(0, 0, 0, 0.1)"};
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr auto auto;
`;

const StyledDeliveriesListTableCell = styled.td`
  align-self: center;
  padding: 2rem 0;
`;

const StyledDeliveriesListTableCellTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.875rem;
`;

const StyledDeliveriesListTableCellText = styled.span`
  line-height: 1.5rem;
`;

const StyledDeliveryStatus = styled.span`
  font-weight: 500;
`;

const DeliveryRow = ({
  drone = "",
  fresh = false,
  orderId = "",
  platform = "",
  status = "",
  technicalCheck = "",
  technician = "",
}) => {
  return (
    <StyledDeliveriesListTableRow fresh={fresh}>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Status
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          <StyledDeliveryStatus>
            {status}
          </StyledDeliveryStatus>
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Order ID
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          {orderId}
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Technician
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          {technician}
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Platform
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          {platform}
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Drone
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          {drone}
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <StyledDeliveriesListTableCellTitle>
          Technical Check
        </StyledDeliveriesListTableCellTitle>
        <StyledDeliveriesListTableCellText>
          {technicalCheck}
        </StyledDeliveriesListTableCellText>
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <ShipmentDetailsButton orderId={orderId || "none"} />
      </StyledDeliveriesListTableCell>
      <StyledDeliveriesListTableCell>
        <DeliveryActionsDropdown />
      </StyledDeliveriesListTableCell>
    </StyledDeliveriesListTableRow>
  );
};

export { DeliveryRow };
