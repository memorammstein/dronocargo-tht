import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DeliveriesTable } from "../components/DeliveriesTable";
import { DeliveryAddForm } from "../components/DeliveryAddForm";
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
  const [deliveryAddFormIsOpen, setDeliveryAddFormIsOpen] = useState(false);

  const handleAddNewDelivery = useCallback((delivery) => {
    setDeliveries((prev) => {
      const updatedDeliveries = [{ ...delivery, fresh: true, status: "Ready", technicalCheck: "Passed" }, ...prev];
      saveDeliveries(updatedDeliveries);
      return updatedDeliveries;
    });
  }, []);

  const handleDeliveryAddFormClose = useCallback(() => {
    setDeliveryAddFormIsOpen(false);
  }, []);

  const handleDeliveryAddFormOpen = useCallback(() => {
    setDeliveryAddFormIsOpen(true);
  }, []);

  const handleDeliveryAddFormSubmit = useCallback((data) => {
    console.log(data);
    handleDeliveryAddFormClose();
    handleAddNewDelivery(data);
  }, [handleAddNewDelivery, handleDeliveryAddFormClose]);

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
            <StyledButton onClick={handleDeliveryAddFormOpen} primary>New Delivery</StyledButton>
          </StyledDeliveriesListHeadSection>
        </StyledDeliveriesListHead>
        <DeliveriesTable deliveries={deliveries} />
      </StyledDeliveriesList>
      <DeliveryAddForm
        isOpen={deliveryAddFormIsOpen}
        onClose={handleDeliveryAddFormClose}
        onSubmit={handleDeliveryAddFormSubmit}
      />
    </StyledPage>
  );
};

export { Deliveries };
