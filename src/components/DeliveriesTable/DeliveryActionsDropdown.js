import React, { useCallback, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import chevronImg from "../../assets/chevron.png";
import { StyledButton } from "../StyledButton";

const StyledActionsButtonChevron = styled.img`
  height: 8px;
  margin-top: 8px;
  width: 12px;
`;

const StyledActionsPopover = styled.div`
  background-color: #FFF;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const StyledActionsPopoverOption = styled.div`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;


const DeliveryActionsDropdown = ({ onEdit, onDelete }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <StyledButton onBlur={handleBlur} onClick={handleClick} ref={setReferenceElement}>
        Actions
        <StyledActionsButtonChevron alt="chevron" src={chevronImg} />
      </StyledButton>
      {isOpen ? (
        <StyledActionsPopover ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          <StyledActionsPopoverOption>Edit</StyledActionsPopoverOption>
          <StyledActionsPopoverOption>Delete</StyledActionsPopoverOption>
        </StyledActionsPopover>
      ) : null}
    </>
  );
};

export { DeliveryActionsDropdown };
