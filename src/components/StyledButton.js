import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  background-color: ${props => props.primary ? "#307460" : "#FFF"};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  color: ${props => props.primary ? "#FFF" : "#000"};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  gap: 1rem;
  line-height: 1.5rem;
  padding: 0.75rem 1rem;
`;

export { StyledButton };
