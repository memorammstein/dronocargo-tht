import styled from "styled-components";
import { DeliveryRow } from "./DeliveryRow";

const StyledDeliveriesListTable = styled.table`
`;

const StyledDeliveriesListTableBody = styled.tbody`
`;


const DeliveriesTable = ({ deliveries }) => {
  return (
    <StyledDeliveriesListTable>
      <StyledDeliveriesListTableBody>
        {deliveries.map((delivery, index) => <DeliveryRow key={index} {...delivery} />)}
      </StyledDeliveriesListTableBody>
    </StyledDeliveriesListTable>
  );
};

export { DeliveriesTable };
