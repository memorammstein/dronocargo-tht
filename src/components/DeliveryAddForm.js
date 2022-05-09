import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import styled from "styled-components";
import * as yup from "yup";
import closeIcon from "../assets/closeIcon.svg";
import { StyledButton } from "./StyledButton";

const StyledCloseButton = styled.img`
  opacity: 0.5;
  position: absolute;
  top: 19px;
  right: 19px;
`;

const StyledModalBody = styled.div`
  padding: 2rem;
`;

const StyledModalActions = styled.div`
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1.5rem;
  gap: 1rem;
  justify-content: flex-end;
`;

const StyledTopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledFormTitle = styled.span`
  font-size: 1.5rem;
`;

const StyledFormDescription = styled.span``;

const StyledFieldsSection = styled.div`
  column-gap: 1.5rem;
  display: flex;
  row-gap: 2rem;
`;

const DeliveryAddForm = ({ isOpen = false, onClose, onSubmit }) => {
  const {handleSubmit, register, reset} = useForm({
    defaultValues: {
      drone: "",
      orderId: "",
      platform: "",
      technician: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        drone: yup.string().required(),
        orderId: yup.string().required(),
        platform: yup.string().required(),
        technician: yup.string().required(),
      })
    ),

  });

  useEffect(() => {
    !isOpen && reset();
  }, [isOpen, reset]);

  const handleSubmitValid = useCallback((data) => {
    onSubmit(data);
  }, [onSubmit]);

  const handleSubmitError = useCallback((errors) => {
    alert(JSON.stringify(errors, null, 2));
  }, []);

  return (
    <ReactModal
      appElement={document.getElementById('app')}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          height: "fit-content",
          margin: "auto",
          padding: 0,
          width: "fit-content",
        }
      }}
    >
      <StyledCloseButton alt="close" src={closeIcon} />
      <form onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}>
        <StyledModalBody>
          <StyledTopSection>
            <StyledFormTitle>New delivery</StyledFormTitle>
            <StyledFormDescription>
              Please select the order ID and a technician to deploy the cargo.
              <br />All elements are mandatory.
            </StyledFormDescription>
          </StyledTopSection>
          <StyledFieldsSection></StyledFieldsSection>
        </StyledModalBody>
        <StyledModalActions>
          <StyledButton onClick={onClose} type="button">Cancel</StyledButton>
          <StyledButton primary type="submit">Create new delivery</StyledButton>
        </StyledModalActions>
      </form>
    </ReactModal>
  );
};

export { DeliveryAddForm };
