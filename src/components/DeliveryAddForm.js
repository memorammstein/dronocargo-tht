import ReactModal from "react-modal";
import styled from "styled-components";
import closeIcon from "../assets/closeIcon.svg";

const StyledCloseButton = styled.img`
  opacity: 0.5;
  position: absolute;
  top: 19px;
  right: 19px;
`;

const DeliveryAddForm = ({ isOpen = false, onClose, onSubmit }) => {
  return (
    <ReactModal
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          height: "fit-content",
          margin: "auto",
          width: "fit-content",
        }
      }}
    >
      <StyledCloseButton alt="close" src={closeIcon} />
    </ReactModal>
  );
};

export { DeliveryAddForm };
