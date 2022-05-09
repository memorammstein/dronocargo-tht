import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DeliveriesTable } from "../components/DeliveriesTable";
import { StyledButton } from "../components/StyledButton";
import { StyledInput } from "../components/StyledInput";
import { StyledPage } from "../components/StyledPage";
import { StyledSubtitle } from "../components/StyledSubtitle";
import { StyledTitle } from "../components/StyledTitle";

const StyledDeliveriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledDeliveriesListHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledDeliveriesListHeadSection = styled.div`
  display: inline-flex;
  gap: 1rem;
`;

const DELIVERIES_STORAGE_KEY = "deliveries";

const fetchDeliveries = () => {
  const fetchedDeliveries = (JSON.parse(localStorage.getItem(DELIVERIES_STORAGE_KEY)) || []).map(
    (delivery) => ({ ...delivery, fresh: false })
  );
  return fetchedDeliveries;
};

const saveDeliveries = (deliveries = []) => {
  localStorage.setItem(DELIVERIES_STORAGE_KEY, JSON.stringify(deliveries));
};

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState(fetchDeliveries());

  const handleAddNewDelivery = useCallback((delivery) => {
    setDeliveries((prev) => {
      const updatedDeliveries = [{ fresh: true }, ...prev];
      saveDeliveries(updatedDeliveries);
      return updatedDeliveries;
    });
  }, []);

  return (
    <StyledPage>
      <StyledDeliveriesList>
        <StyledDeliveriesListHead>
          <StyledDeliveriesListHeadSection>
            <StyledTitle>Delivery</StyledTitle>
            <StyledSubtitle>History</StyledSubtitle>
          </StyledDeliveriesListHeadSection>
          <StyledDeliveriesListHeadSection>
            <StyledInput placeholder="Search" type="search" />
            <StyledButton onClick={handleAddNewDelivery} primary>New Delivery</StyledButton>
          </StyledDeliveriesListHeadSection>
        </StyledDeliveriesListHead>
        <DeliveriesTable deliveries={deliveries} />
      </StyledDeliveriesList>
    </StyledPage>
  );
};

export { Deliveries };
