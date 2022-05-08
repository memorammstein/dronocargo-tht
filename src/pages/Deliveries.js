import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryActionsDropdown } from "../components/DeliveryActionsDropdown";
import { ShipmentDetailsButton } from "../components/ShipmentDetailsButton";
import { StyledPage } from "../components/StyledPage";

const StyledDeliveriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledDeliveriesListHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDeliveriesListTable = styled.table`
  border-collapse: collapse;
`;

const StyledDeliveriesListTableBody = styled.tbody`
`;

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

const StyledDeliveriesListTableCellText = styled.span``;

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

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([{ fresh: true }, {}]);

  useEffect(() => {
    const retrievedDeliveries = (JSON.parse(localStorage.getItem("deliveries")) || []).map(
      (delivery) => ({ ...delivery, fresh: false })
    );
    setDeliveries(retrievedDeliveries);
  }, []);

  useEffect(() => {
    localStorage.setItem("deliveries", JSON.stringify(deliveries));
  }, [deliveries]);

  const handleAddNewDelivery = useCallback((delivery) => {
    setDeliveries((prev) => [{ ...delivery, fresh: true }, ...prev]);
  }, []);

  return (
    <StyledPage>
      <StyledDeliveriesList>
        <StyledDeliveriesListHead></StyledDeliveriesListHead>
        <StyledDeliveriesListTable>
          <StyledDeliveriesListTableBody>
            {deliveries.map((delivery, index) => <DeliveryRow key={index} {...delivery} />)}
          </StyledDeliveriesListTableBody>
        </StyledDeliveriesListTable>
      </StyledDeliveriesList>
    </StyledPage>
  );
};

export { Deliveries };
